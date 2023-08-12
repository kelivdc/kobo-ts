'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

function Dashboard() {
    const { data: session } = useSession()
    return (
        <>
            <h1>Dashboard</h1>
            <div>{JSON.stringify(session?.jwt)}</div>
        </>
    )
}

export default Dashboard