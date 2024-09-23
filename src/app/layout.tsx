import type { Metadata } from "next";
import "./globals.css";
import { BaseProvider } from "@/components/base-provider";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

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
            <main className="container text-foreground mx-auto py-4 md:py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-grow flex-shrink ">
              <div className="col-span-2 order-0">{children}</div>
              <aside className="-order-1 col-span-1">left</aside>
              <aside className="order-1 col-span-1">right</aside>
            </main>
            <SiteFooter />
          </div>
        </BaseProvider>
      </body>
    </html>
  );
}
