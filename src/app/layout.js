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
  title: "Home : Kyambogo Alumni",
  description: "Manage Kyambogo Alumni Records",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="u-body u-xl-mode">
        {children}
      </body>
    </html>
  );
}
