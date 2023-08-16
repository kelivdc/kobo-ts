// import '../../app/dashboard.css'

import '@/app/dashboard.css'
import Navbar from "@/components/Navbar";
import { NextAuthProvider } from "@/components/Provider";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/viva-light/theme.css";

export const metadata: Metadata = {
  title: 'CMS',
  description: 'Kobo'
}


export default function CmsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen w-full bg-fixed">
      <Sidebar />
      <div className="ml-60">
        <Navbar />
        <div className="p-4"><NextAuthProvider>{children}</NextAuthProvider></div>
      </div>
    </div>

  );
}