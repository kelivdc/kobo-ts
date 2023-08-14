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
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import Link from 'next/link'

export default function Assets() {
  const { data: session } = useSession()
  const [assets, setAssets] = useState([])
  const [isOpen, SetIsOpen] = useState(true)
  const [uid, setUid] = useState(null)
  const [isLoading, setLoading] = useState(true);

  const selectUid = (uid) => {
    setUid(uid);
    document.getElementById(`btn_${uid}`).innerHTML = 'Pulling...';
    document.getElementById(`btn_${uid}`).disabled = true;
    document.getElementById(`total_${uid}`).innerHTML = '-';
    pullData(uid)
  }
  const api_url = process.env.server

  useEffect(() => {
    var arrResult = []
    if (session) {
      async function getTotal(uid) {
        try {
          const resp = await fetch(api_url + '/assets/total/' + uid, {
            headers: {
              Authorization: `Bearer ${session.jwt}`
            }
          })
          const data = await resp.json()
          return data['Count']
        } catch {
          return 0
        }
      }

      async function getAssets() {
        const resp = await fetch(api_url + '/assets', {
          headers: {
            Authorization: `Bearer ${session.jwt}`
          }
        })
        const data = await resp.json()
        let hasil = data['results']
        var arr = {}
        hasil.forEach(item => {
          arr['result'] = item
          arr['local'] = getTotal(item['uid'])
          arrResult.push(arr)
        })
        setAssets(arrResult)
      }
      setLoading(false);
      getAssets()
    }
  }, [session])
  const pullData = async (uid) => {
    const resp = await fetch(process.env.server + `/assets/pull/${uid}`, {
      headers: {
        Authorization: `Bearer ${session?.jwt}`
      }
    })
    const data = await resp.json()
    document.getElementById(`total_${data['uid']}`).innerHTML = data['total']
    document.getElementById(`btn_${data['uid']}`).disabled = false;
    document.getElementById(`btn_${data['uid']}`).innerHTML = 'Pull';
  }

  return (
    <>
      <Panel title="Assets">
        {isLoading ? (
          <Skeleton className="w-[100px] h-[20px] rounded-full" />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Create At</TableHead>
                <TableHead>Last Modified</TableHead>
                <TableHead>Submissions</TableHead>
                <TableHead>Local Subs.</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assets.map((item, index) => (
                <TableRow key={index}>
                  <TableCell><Link href={`/cms/assets/${item.result.uid}`}>{item.result.name}</Link></TableCell>
                  <TableCell>{moment(item.result.date_created).format('LL')}</TableCell>
                  <TableCell>{moment(item.result.date_modified).format('LL')}</TableCell>
                  <TableCell>{item.result.deployment__submission_count}</TableCell>
                  <TableCell id={`total_${item.result.uid}`}>{item.local}</TableCell>
                  <TableCell>
                    <Button variant="destructive" id={`btn_${item.result.uid}`} className="rounded-full" onClick={() => selectUid(item.result.uid)}>Pull</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Panel>
    </>
  )
}
