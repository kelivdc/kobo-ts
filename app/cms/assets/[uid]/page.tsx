'use client'
import React from 'react'
import Panel from "@/components/Panel";
import { useState, useEffect } from "react"
import { useSession } from 'next-auth/react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ScrollPanel } from 'primereact/scrollpanel';
import moment from 'moment'
import { FilterMatchMode, FilterOperator } from 'primereact/api';

const api_url = process.env.server

export default function Detail({ params }) {
  const { data: session } = useSession()
  const [results, setResults] = useState([])
  const [survey, setSurvey] = useState([])
  const [records, setRecords] = useState([])
  const [filters, setFilters] = useState({
    name: { value: null, matchMode: FilterMatchMode.CONTAINS},
  })
  const [Keys, setKeys] = useState([])
  const formatTanggal = (record: any) => {
    return moment(record).format('LLL')
  }
  const handleRow = () => {
    alert('Row handle')
  }
  useEffect(() => {
    if (session) {
      async function getSurvey() {
        try {
          const resp = await fetch(api_url + '/assets/form/' + params.uid, {
            headers: {
              Authorization: `Bearer ${session.jwt}`
            }
          })
          const data = await resp.json()
          setSurvey(data['Content']['survey'])
          const values = data['Content']['survey'].map(item => item['name'])
          setKeys(values)
        } catch (err) {
          console.log('Error', err)
        }
      }
      async function getData() {
        try {
          const resp = await fetch(api_url + '/assets/data/' + params.uid, {
            headers: {
              Authorization: `Bearer ${session.jwt}`
            }
          })
          const data = await resp.json()
          setRecords(data)
        } catch (err) {
          console.log('Error', err)
        }
      }
      getSurvey()
      getData()
    }
  }, [session])
  return (
    <Panel title="Results">
      <ScrollPanel style={{ width: '100%', height: '100%' }}>
        <DataTable value={records} globalFilterFields={Keys} reorderableColumns showGridlines tableStyle={{ minWidth: '200px' }} onRowReorder={handleRow}>
          {survey.map((item) => (
            item['name'] === "start" || item['name'] === "selesai" ? (
              <Column key={item['name']} field={item['name']} header={item['label'][0]} bodyStyle={{ minWidth: '200px' }} body={formatTanggal} sortable></Column>
            ) : (
              <Column key={item['name']} filter field={item['name']} header={item['label'][0]} bodyStyle={{ minWidth: '200px' }} sortable></Column>
            )
          ))}
        </DataTable>
      </ScrollPanel>
    </Panel>
  )
}
