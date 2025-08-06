import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GlobalLoader from '@/components/GlobalLoader'



export const metadata: Metadata = {
  title: "Ministry of Works",
  description: "The Ministry of Works in Imo State is responsible for overseeing and developing the state's infrastructure sector, as well as managing public works programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <GlobalLoader />
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
