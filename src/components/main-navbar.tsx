"use client";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { NavItem } from "./interfaces";
import { NavbarActions } from "./navbar-actions";

export function MainNavbar() {
  return (
    <div className="hidden lg:flex lg:flex-row items-center justify-between flex-grow gap-2">
      <nav className="flex flex-1 items-center justify-center gap-4">
        {siteConfig.navItems.map((item: NavItem) => (
          <Link
            key={item.href}
            href={item.href}
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground font-medium"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <NavbarActions />
    </div>
  );
}
