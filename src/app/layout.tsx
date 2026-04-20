// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer"; // safe to comment out if not ready yet


// ---- Fonts ----
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// ---- Metadata ----
export const metadata: Metadata = {
  title: { default: "DIGON™", template: "%s • DIGON™" },
  description: "DIGON™ — Engineering, Amplification, and Aerospace Systems.",
  icons: { icon: "/favicon.ico" },

  openGraph: {
    title: "DIGON™",
    description: "Engineering, Amplification, and Aerospace Systems.",
    url: "https://di9on.com",
    siteName: "DIGON™",
    type: "website",
  },
};


// ---- Root Layout ----
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[var(--bg)] text-[var(--ink)] antialiased relative`}
      >


        {/* Permanent left sidebar */}
        <Navbar />

        {/* Main content area — offset by measured sidebar width (falls back to 14rem) */}
        <main
          className="px-6 pb-8 min-h-screen relative z-10 transition-[margin-left,padding-top] duration-300"
          style={{
            marginLeft: "calc(var(--sidebar-width, 14rem) + 16px)",
            paddingTop: "2rem",
          }}
        >
          {children}
        </main>

        {/* Optional global footer */}
        <Footer />
      </body>
    </html>
  );
}
