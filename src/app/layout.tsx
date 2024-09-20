import type { Metadata } from "next";
import "./globals.css";
import { BaseProvider } from "@/components/base-provider";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Xmchx's blog",
  description: "Technology & Social Life",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[3.5rem]">
      <body
        className={cn(
          "min-h-screen  bg-gradient-to-b from-background-top to-background-bottom font-sans antialiased relative flex flex-col ",
          inter.variable
        )}
      >
        <BaseProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </BaseProvider>
      </body>
    </html>
  );
}
