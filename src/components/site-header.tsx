import { Navbar } from "./navbar";
import Link from "next/link";

import { siteConfig } from "@/config/site";

function SiteHeader() {
  return (
    <header className="print:hidden w-full h-auto bg-background py-2 md:py-1 overflow-x-hidden shadow">
      <div className="w-full h-full py-2 md:container">
        <div className="flex flex-row items-center justify-between gap-2 lg:gap-4 xl:gap-6 px-4">
          <Link href="/" className="flex flex-row items-center gap-2">
            <span className="font-normal text-lg">{siteConfig.name}</span>
          </Link>
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
