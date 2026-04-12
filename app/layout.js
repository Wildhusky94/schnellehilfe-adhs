import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ADHS Coach im Saarland – Hilfe für Kinder, Erwachsene & Familien",
description: "Unterstützung bei ADHS und Verdacht auf ADHS im Saarland – alltagsnah, verständlich und individuell. Für mehr Klarheit und Struktur im Alltag. Jetzt Hilfe finden.",
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="de"
      className="h-full antialiased"
    >
      <head />
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
