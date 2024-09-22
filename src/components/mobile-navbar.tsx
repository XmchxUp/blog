"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import { ThemeModeToggle } from "./theme-mode-toggle";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { NavItem } from "./interfaces";

function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="text-foreground">
        <SheetHeader>
          <SheetTitle className="px-4">Menu</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <hr className="my-4" />
        <div className="flex flex-col items-center space-y-8 py-4">
          <div className="flex flex-col gap-2 w-full">
            {siteConfig.navItems.map((item: NavItem) => {
              return (
                <MobileLink
                  key={item.href}
                  href={item.href}
                  onOpenChange={setOpen}
                  className="font-medium rounded-md bg-background px-4 py-2 hover:bg-accent text-foreground"
                >
                  {item.label}
                </MobileLink>
              );
            })}
          </div>
          <div className="flex flex-row gap-2">
            <MobileLink
              href="/search"
              onOpenChange={setOpen}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md  font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            >
              <Icons.search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </MobileLink>
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
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
}

function MobileLink({
  children,
  onOpenChange,
  href,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}

export default MobileNavbar;
