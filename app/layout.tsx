import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Muhammad Faturrahman Putra & Laura Shakira Aisyah Putri — Wedding Invitation",
  description:
    "Undangan pernikahan Muhammad Faturrahman Putra & Laura Shakira Aisyah Putri, 30 Oktober 2031.",
  openGraph: {
    title: "Faturrahman & Laura — 30 Oktober 2031",
    description: "A Love Story Written in Code",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faturrahman & Laura",
    description: "A Love Story Written in Code",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
