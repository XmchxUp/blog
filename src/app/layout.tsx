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
          "font-sans subpixel-antialiased tracking-wide",
          inter.variable
        )}
      >
        <BaseProvider>
          <div className="min-h-screen flex flex-col bg-gradient-to-b from-background-top to-background-bottom">
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </BaseProvider>
      </body>
    </html>
  );
}
