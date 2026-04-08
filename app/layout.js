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
  verification: {
    google: "9u8sSV5..." // dein Code bleibt hier drin
  }
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