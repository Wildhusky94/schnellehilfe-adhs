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
  title: "Schnelle Hilfe ADHS",
  description: "ADHS Coaching für Erwachsene & Kinder – schnelle, konkrete Hilfe im Alltag.",
  verification: {
    google: "9u8sSV5dehSez5o5_FH_Sq27tSwQO0lvIuqyQ6FDekQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
<<<<<<< HEAD
      lang="en"
      className={${geistSans.variable} ${geistMono.variable} h-full antialiased}
    >
      <head>
        <meta name="google-site-verification" content="9u8sSV5dehSe..." />
      </head>

=======
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
>>>>>>> 1c633439ae91d0c421f6294c5e51386157ef5920
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}