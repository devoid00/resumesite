import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Tommy Reynolds",
  description: "Portfolio, resume, and contact information for Tommy Reynolds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main
          style={{
            marginLeft: "calc(var(--sidebar-width, 14rem) + 16px)",
            paddingTop: "2rem",
            paddingRight: "1.5rem",
            paddingBottom: "2rem",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
