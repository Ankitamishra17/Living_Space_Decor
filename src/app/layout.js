"use client";

import { usePathname } from "next/navigation";
import { Marcellus, Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ShareButton from "@/components/common/ShareButton";

const marcellus = Marcellus({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "600", "700"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isAdmin = pathname.startsWith("/admin");

  return (
    <html
      lang="en"
      className={`${marcellus.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        {!isAdmin && <Navbar />}

        <main className="flex-1">{children}</main>

        {!isAdmin && <Footer />}
        {!isAdmin && <ShareButton />}
      </body>
    </html>
  );
}
