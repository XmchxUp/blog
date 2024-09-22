import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import { ThemeModeToggle } from "./theme-mode-toggle";

// TODO: navbar header more configureable
function MobileNavbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className=" lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="px-4">Menu</SheetTitle>
        </SheetHeader>
        <hr className="my-4" />
        <div className="flex flex-col items-center space-y-8 py-4">
          <div className="flex flex-col gap-2 w-full">
            <Link
              href="/"
              className="font-medium rounded-md bg-background px-4 py-2 hover:bg-accent text-foreground"
              // className={cn(
              //   "rounded-md bg-background px-4 py-2 text-sm  hover:bg-accent",
              //   pathname === "/" ? "text-foreground" : "text-foreground/60"
              // )}
            >
              Home
            </Link>
            <Link
              href="/archives"
              className="font-medium rounded-md bg-background px-4 py-2 hover:bg-accent text-foreground"
            >
              Archives
            </Link>
            <Link
              href="/about"
              className="font-medium rounded-md bg-background px-4 py-2 hover:bg-accent text-foreground"
            >
              About
            </Link>
          </div>
          <div className="flex flex-row gap-2">
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
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavbar;
