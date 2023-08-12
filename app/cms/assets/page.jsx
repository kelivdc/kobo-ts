'use client'
import React from 'react'
import Panel from "@/components/Panel";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useSession } from 'next-auth/react'
import { useState, useEffect } from "react"
import moment from 'moment'

export default function Assets() {
  const { data: session } = useSession()
  const [assets, setAssets] = useState([])
  const api_url = process.env.server
  useEffect(() => {
    if (session) {
      async function getAssets() {
        const resp = await fetch(api_url + '/assets', {
          headers: {
            Authorization: `Bearer ${session.jwt}`
          }
        })
        const data = await resp.json()
        setAssets(data['results'])
      }
      getAssets()
    }
  }, [])
  return (
    <Panel title="Assets">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Create At</TableHead>
            <TableHead>Last Modified</TableHead>
            <TableHead>Submissions</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assets.map((item, index) =>(          
          <TableRow key={index}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{moment(item.date_created).format('LL')}</TableCell>
            <TableCell>{moment(item.date_modified).format('LL')}</TableCell>
            <TableCell>{item.deployment__submission_count}</TableCell>
            <TableCell>Pull</TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </Panel>
  )
}
