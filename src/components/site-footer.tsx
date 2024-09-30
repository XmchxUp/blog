import { siteConfig } from "@/config/site";

function SiteFooter() {
  return (
    <footer className="h-16 bg-background text-secondary-foreground print:hidden">
      <div className="container mx-auto h-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-1">
        <span className="text-sm">
          © 2024&nbsp;
          <a
            rel="author noopener"
            className="hover:underline text-primary"
            href={siteConfig.links.personalSite}
          >
            Xmchx
          </a>
          &nbsp; All rights reserved.
        </span>
        <span className="text-sm">
          Powered by&nbsp;
          <a className="hover:underline text-primary" href="https://nextjs.org">
            Next.js
          </a>
        </span>
      </div>
    </footer>
  );
}

export default SiteFooter;
