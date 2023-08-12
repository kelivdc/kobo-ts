import { NextAuthProvider } from "@/components/Provider";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'CMS',
    description: 'Kobo',
  }
  

export default function CmsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextAuthProvider>{children}</NextAuthProvider>
  );
}