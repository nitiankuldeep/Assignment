import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/components//Navbar";
import Footer from "@/components/components/Footer";

export const metadata: Metadata = {
  title: "Training Horizon",
  description: "Training horizon website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="relative">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
