import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: "Stratify N.V. | Strategy, Governance, Risk & Compliance Consulting",
  description:
    "Consulting in strategy, GRC, information security, privacy, AI governance and organizational development. ISO/IEC 27001, 27701, 42001, ISO 22301 and 31000.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={grotesk.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
