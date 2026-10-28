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
      <head>
        <script
          src="https://pulse-track.onrender.com/tracker.min.js"
          data-key="pk_live_926d84310a51c05d2d3e537e"
          defer
        />
      </head>
      <body>
      <GlobalLoader />
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
