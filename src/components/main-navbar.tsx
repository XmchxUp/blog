"use client";

import Link from "next/link";
import { ThemeModeToggle } from "./theme-mode-toggle";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";

export function MainNavbar() {
  return (
    <div className="hidden lg:flex lg:flex-row items-center justify-normal lg:justify-between flex-grow gap-2">
      <nav className="relative z-10 flex max-w-max flex-1 items-center justify-center w-full gap-4 flex-grow">
        <Link
          href="/"
          className="rounded-md bg-background px-4 py-2  font-medium hover:bg-accent text-foreground"
          // className={cn(
          //   "rounded-md bg-background px-4 py-2   hover:bg-accent",
          //   pathname === "/" ? "text-foreground" : "text-foreground/60"
          // )}
        >
          Home
        </Link>
        <Link
          href="/archives"
          className="rounded-md bg-background px-4 py-2 font-medium  hover:bg-accent text-foreground"
        >
          Archives
        </Link>
        <Link
          href="/about"
          className="rounded-md bg-background px-4 py-2 font-medium  hover:bg-accent text-foreground"
        >
          About
        </Link>
      </nav>
      <div className="flex flex-row gap-1">
        <Link
          href="/search"
          rel="noreferrer"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md  font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
        >
          <Icons.search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Link>
        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md  font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
        >
          <Icons.gitHub className="h-4 w-4" />
          <span className="sr-only">GitHub</span>
        </Link>
        <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md  font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
          <ThemeModeToggle />
        </div>
      </div>
    </div>
  );
}
