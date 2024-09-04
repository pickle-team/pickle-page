import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

export const metadata: Metadata = {
  title: "Pickle",
  description: "Pickle Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        <div style={{ height: 60 }} />
        {children}
      </body>
    </html>
  );
}
