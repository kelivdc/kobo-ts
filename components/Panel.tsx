import React from 'react'

type Props = {
    title: string,
    children?: React.ReactNode
}

export default function Panel({ title, children }: React.FC<Props>) {
    return (
        <div className='border border-slate-200'>
            <div className='border-b text-center text-xl text-primary py-2 flex justify-center items-center bg-slate-500/50 backdrop-blur-sm'>
                <span className='bg-secondary py-1 px-4 rounded-full'>{title}</span>
            </div>
            <div className='py-4 bg-white min-h-[500px]'>
                {children}
            </div>
        </div>
    )
}
