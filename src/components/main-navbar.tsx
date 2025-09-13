"use client";

import Link from "next/link";
import { ThemeModeToggle } from "./theme-mode-toggle";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import { NavItem } from "./interfaces";

export function MainNavbar() {
  return (
    <div className="hidden lg:flex lg:flex-row items-center justify-normal lg:justify-between flex-grow gap-2">
      <nav className="relative z-10 flex max-w-max flex-1 items-center justify-center w-full gap-4 flex-grow">
        {siteConfig.navItems.map((item: NavItem) => {
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 font-medium"
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="flex flex-row gap-1">
        <Link
          href="/search"
          className="inline-flex text-foreground items-center justify-center whitespace-nowrap rounded-md  font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
        >
          <Icons.search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Link>
        <Link
          href={siteConfig.links.tgArchivePage}
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-foreground items-center justify-center whitespace-nowrap rounded-md  font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
        >
          <Icons.thinking className="h-4 w-4" />
          <span className="sr-only">Daily</span>
        </Link>
        <Link
          href={siteConfig.links.runningPage}
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-foreground items-center justify-center whitespace-nowrap rounded-md  font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
        >
          <Icons.running className="h-4 w-4" />
          <span className="sr-only">RunningPage</span>
        </Link>
        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-foreground items-center justify-center whitespace-nowrap rounded-md  font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
        >
          <Icons.github className="h-4 w-4" />
          <span className="sr-only">GitHub</span>
        </Link>
        <div className="inline-flex text-foreground items-center justify-center whitespace-nowrap rounded-md  font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
          <ThemeModeToggle />
        </div>
      </div>
    </div>
  );
}
