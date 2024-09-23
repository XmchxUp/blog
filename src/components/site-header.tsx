import { MainNavbar } from "./main-navbar";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import MobileNavbar from "./mobile-navbar";

function SiteHeader() {
  return (
    <header className="w-full h-auto bg-background py-2 md:py-1 overflow-x-hidden shadow">
      <div className="w-full h-full py-2 md:container">
        <div className="flex flex-row items-center text-foreground justify-between gap-2 lg:gap-4 xl:gap-6 px-4">
          <Link href="/" className="flex flex-row items-center gap-2">
            <span className="font-medium text-lg">{siteConfig.name}</span>
          </Link>
          <MainNavbar />
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
