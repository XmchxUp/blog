import type { Metadata } from "next";
import "./globals.css";
import { BaseProvider } from "@/components/base-provider";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import profilePic from "@/app/me.png";
import Link from "next/link";

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

              {/* Left */}
              <aside className="-order-1 col-span-1 hidden md:block">
                <div className="flex flex-col gap-4 w-full sticky top-3 lg:top-4">
                  {/* Profile Card */}
                  <div className="rounded-xl border bg-card text-card-foreground shadow pt-6 px-2">
                    <div className="flex flex-col pt-0 p-6 items-center">
                      <div className="w-24 h-24 rounded-full border-2 border-gray-100">
                        <Image src={profilePic} alt="Picture of the author" />
                      </div>
                      <div className="flex flex-col items-center pt-2">
                        <span className="text-2xl text-primary font-medium">
                          Xmchx
                        </span>
                        <span className="text-sm text-primary truncate">
                          Technology & Life
                        </span>
                      </div>
                      <div className="flex flex-row gap-4 justify-center w-full pt-4">
                        <div className="flex flex-col gap-1 items-center">
                          <span className="text-lg truncate text-primary">
                            30
                          </span>
                          <span className="text-sm text-primary">Posts</span>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                          <span className="text-lg truncate text-primary">
                            3
                          </span>
                          <span className="text-sm text-primary">
                            Categories
                          </span>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                          <span className="text-lg truncate text-primary">
                            40
                          </span>
                          <span className="text-sm text-primary">Tags</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Categories Card */}
                  <div className="rounded-xl border bg-card text-card-foreground shadow">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2 pt-4">
                      <h3 className="text-md font-normal tracking-tight">
                        Categories
                      </h3>
                    </div>
                    <div className="flex flex-col space-y-1 px-4 p-6 pt-0">
                      <Link
                        href="/category/life"
                        className="items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs flex flex-row gap-2 w-full font-normal"
                      >
                        <span className="text-sm flex-grow truncate">Life</span>
                        <span className="text-sm">2</span>
                      </Link>
                      <Link
                        href="/category/life"
                        className="items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs flex flex-row gap-2 w-full font-normal"
                      >
                        <span className="text-sm flex-grow truncate">
                          Technology
                        </span>
                        <span className="text-sm">20</span>
                      </Link>
                      <Link
                        href="/category/life"
                        className="items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs flex flex-row gap-2 w-full font-normal"
                      >
                        <span className="text-sm flex-grow truncate">
                          Notes
                        </span>
                        <span className="text-sm">20</span>
                      </Link>
                      <Link
                        href="/category/life"
                        className="items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs flex flex-row gap-2 w-full font-normal"
                      >
                        <span className="text-sm flex-grow truncate">
                          Moments
                        </span>
                        <span className="text-sm">20</span>
                      </Link>
                    </div>
                  </div>

                  {/* Archives Card */}
                  <div className="rounded-xl border bg-card text-card-foreground shadow">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2 pt-4">
                      <h3 className="text-md font-normal tracking-tight">
                        Archives
                      </h3>
                    </div>
                    <div className="flex flex-col space-y-1 px-4 p-6 pt-0">
                      <Link
                        href="/category/life"
                        className="items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs flex flex-row gap-2 w-full font-normal"
                      >
                        <span className="text-sm flex-grow truncate">2024</span>
                        <span className="text-sm">2</span>
                      </Link>
                      <Link
                        href="/category/life"
                        className="items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs flex flex-row gap-2 w-full font-normal"
                      >
                        <span className="text-sm flex-grow truncate">2023</span>
                        <span className="text-sm">20</span>
                      </Link>
                    </div>
                  </div>

                  {/* Tags Card */}
                  <div className="rounded-xl border bg-card text-card-foreground shadow">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2 pt-4">
                      <h3 className="text-md font-normal tracking-tight">
                        Tags
                      </h3>
                    </div>
                    <div className="p-6 flex flex-row flex-wrap items-center pt-2 px-4">
                      <Link
                        href="/category/life"
                        className="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-sm font-normal"
                      >
                        Algorithm
                      </Link>
                      <Link
                        href="/category/life"
                        className="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-sm font-normal"
                      >
                        Theory
                      </Link>
                      <Link
                        href="/category/life"
                        className="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-sm font-normal"
                      >
                        Cloud Native
                      </Link>
                      <Link
                        href="/category/life"
                        className="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-sm font-normal"
                      >
                        Kata
                      </Link>
                      <Link
                        href="/category/life"
                        className="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-sm font-normal"
                      >
                        Algorithm
                      </Link>
                      <Link
                        href="/category/life"
                        className="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-sm font-normal"
                      >
                        Theory
                      </Link>
                      <Link
                        href="/category/life"
                        className="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-sm font-normal"
                      >
                        Cloud Native
                      </Link>
                      <Link
                        href="/category/life"
                        className="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-sm font-normal"
                      >
                        Kata
                      </Link>
                    </div>
                  </div>

                  {/*  */}
                </div>
              </aside>

              {/* Right */}
              <aside className="order-1 col-span-1 hidden lg:block">
                right
              </aside>
            </main>
            <SiteFooter />
          </div>
        </BaseProvider>
      </body>
    </html>
  );
}
