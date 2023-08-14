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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ReloadIcon } from "@radix-ui/react-icons";


export default function Assets() {
  const { data: session } = useSession()
  const [assets, setAssets] = useState([])
  const [isOpen, SetIsOpen] = useState(true)
  const [uid, setUid] = useState(null)
  const selectUid = (uid) => {
    setUid(uid);
    document.getElementById(`btn_${uid}`).innerHTML = 'Pulling...';
    document.getElementById(`btn_${uid}`).disabled = true;
    document.getElementById(`total_${uid}`).innerHTML = '-';
    pullData(uid)
  }
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
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Create At</TableHead>
              <TableHead>Last Modified</TableHead>
              <TableHead>Submissions</TableHead>
              <TableHead>Local</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assets.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{moment(item.date_created).format('LL')}</TableCell>
                <TableCell>{moment(item.date_modified).format('LL')}</TableCell>
                <TableCell>{item.deployment__submission_count}</TableCell>
                <TableCell id={`total_${item.uid}`}>0</TableCell>
                <TableCell>
                  <Button variant="destructive" id={`btn_${item.uid}`} className="rounded-full" onClick={() => selectUid(item.uid)}>Pull</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Panel>
    </>
  )
}
