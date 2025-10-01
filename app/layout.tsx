import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KeepMe Lifestyle Business Systems Consolidation | Boostkit Proposal",
  description: "Complete Odoo ERP implementation replacing Sage 50, Trello, and Boostkit with unified AI-powered system. £32,000 | 6 Months | Professional proposal by Boostkit.",
  keywords: "Odoo ERP, Business Systems Consolidation, Sage 50 Migration, Trello Alternative, CRM Integration, UK Business Software",
  openGraph: {
    title: "KeepMe Lifestyle Business Systems Consolidation",
    description: "Replace Sage 50, Trello & Boostkit with unified Odoo ERP. Complete proposal for £32,000 over 6 months.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
