import type { Metadata } from "next";
import "./globals.css";
import { BaseProvider } from "@/components/base-provider";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import MainLeftAside from "@/components/main-left";
import MainRightAside from "@/components/main-right";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          "font-sans subpixel-antialiased tracking-wide text-foreground",
          inter.variable
        )}
      >
        <BaseProvider>
          <div className="min-h-screen flex flex-col bg-gradient-to-b from-background-top to-background-bottom">
            <SiteHeader />
            <main className="w-full mx-auto py-4 md:py-8
                 grid grid-cols-1
                 md:grid-cols-[220px_minmax(0,1fr)]
                 lg:grid-cols-[260px_minmax(0,1fr)_320px]
                 gap-6
                 max-w-[1600px] px-4">
              <MainLeftAside />
              {children}
              <MainRightAside />
            </main>
            <SiteFooter />
            <Analytics />
            <GoogleAnalytics gaId="G-N80PEBXDRQ" />
            <SpeedInsights />
          </div>
        </BaseProvider>
      </body>
    </html>
  );
}
