// components/navbar-actions.tsx
"use client";
import Link from "next/link";
import { ThemeModeToggle } from "./theme-mode-toggle";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";

const navButtonClass =
  "inline-flex text-foreground items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2";

export function NavbarActions() {
  return (
    <div className="flex flex-row gap-1">
      <Link href="/search" className={navButtonClass}>
        <Icons.search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Link>
      <Link
        href={siteConfig.links.tgArchivePage}
        target="_blank"
        rel="noreferrer"
        className={navButtonClass}
      >
        <Icons.thinking className="h-4 w-4" />
        <span className="sr-only">Daily</span>
      </Link>
      <Link
        href={siteConfig.links.runningPage}
        target="_blank"
        rel="noreferrer"
        className={navButtonClass}
      >
        <Icons.running className="h-4 w-4" />
        <span className="sr-only">RunningPage</span>
      </Link>
      <Link
        href={siteConfig.links.github}
        target="_blank"
        rel="noreferrer"
        className={navButtonClass}
      >
        <Icons.github className="h-4 w-4" />
        <span className="sr-only">GitHub</span>
      </Link>
      <div className={navButtonClass}>
        <ThemeModeToggle />
      </div>
    </div>
  );
}
