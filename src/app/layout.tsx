import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DHN Construcciones",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
