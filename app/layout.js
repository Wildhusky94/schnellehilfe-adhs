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
  title: "ADHS Coach Saarland – Hilfe für Kinder, Erwachsene & Familien",
  description: "ADHS Coaching im Saarland für Kinder, Erwachsene und Familien – Unterstützung bei ADHS und Verdacht auf ADHS. Alltagsnah, verständlich und individuell.",
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
