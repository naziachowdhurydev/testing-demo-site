import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "@/component/SiteHeader";
import { getSiteData } from "@/lib/siteData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naomi Holligan | Family Photographer",
  description: "Warm, elegant family photography portfolio landing page.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const site = getSiteData();

  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader brand={site.brand} nav={site.nav} />
        {children}
      </body>
    </html>
  );
}
