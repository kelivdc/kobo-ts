'use client'
import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'

function Navbar() {
  return (
    <div className="flex justify-between items-center p-2 bg-slate-400/30 backdrop-blur-sm">
        <div></div>
        <div></div>
        <div>
            <Button variant='secondary' className='rounded-full' onClick={() => signOut()}>Logout</Button>
        </div>
    </div>
  )
}

export default Navbar