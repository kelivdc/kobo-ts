import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
    return (
        <aside id="sidebar" className="fixed left-0 top-0 z-40 h-screen w-60 transition-transform" aria-label="Sidebar">
            <div className="flex h-full flex-col overflow-y-auto border-r border-slate-400  backdrop-blur-sm bg-white/30 px-3 py-4">
                <div href="#" className="mb-10 flex items-center rounded-lg px-3 py-2 text-white dark:text-white">
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-command"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" /></svg>
                    <span className="ml-3 text-base font-semibold">KOBO App</span>
                </div>
                <ul className="space-y-2 text-sm font-medium">
                    <li>
                        <Link href="/cms/dashboard" className="flex items-center rounded-lg px-3 py-2 text-white hover:bg-slate-400/30 hover:backgrdop-sm dark:text-white dark:hover:bg-slate-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="24" height="24" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home">
                                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            <span className="ml-3 flex-1 whitespace-nowrap">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <a href="#" className="flex items-center rounded-lg px-3 py-2 text-white hover:bg-slate-400/30 hover:backgrdop-sm dark:text-white dark:hover:bg-slate-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="24" height="24" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            <span className="ml-3 flex-1 whitespace-nowrap">Customers</span>
                        </a>
                    </li>
                    <li>
                        <Link href="/cms/assets" className="flex items-center rounded-lg px-3 py-2 text-white hover:bg-slate-400/30 hover:backgrdop-sm dark:text-white dark:hover:bg-slate-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="24" height="24" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package">
                                <path d="M16.5 9.4 7.55 4.24" />
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                <polyline points="3.29 7 12 12 20.71 7" />
                                <line x1="12" x2="12" y1="22" y2="12" />
                            </svg>
                            <span className="ml-3 flex-1 whitespace-nowrap">Assets</span>
                        </Link>
                    </li>
                    <li>
                        <a href="#" className="flex items-center rounded-lg px-3 py-2 text-white hover:bg-slate-400/30 hover:backgrdop-sm dark:text-white dark:hover:bg-slate-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" width="24" height="24" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings">
                                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                            <span className="ml-3 flex-1 whitespace-nowrap">Settings</span>
                        </a>
                    </li>
                </ul>
                <div className="mt-auto flex">
                    <div className="flex w-full justify-between text-center">
                        <span className="text-sm dark:text-white">Copyright &copy; 2023</span>
                    </div>
                </div>
            </div>
        </aside>
    )
}