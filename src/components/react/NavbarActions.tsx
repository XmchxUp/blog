import { ThemeModeToggle } from "./ThemeModeToggle";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";

const navButtonClass =
  "inline-flex text-foreground items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2";

export default function NavbarActions() {
  return (
    <div className="flex flex-row gap-1">
      <a href="/search" className={navButtonClass}>
        <Icons.search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </a>
      <a href={siteConfig.links.tgArchivePage} target="_blank" rel="noreferrer" className={navButtonClass}>
        <Icons.thinking className="h-4 w-4" />
        <span className="sr-only">Daily</span>
      </a>
      <a href={siteConfig.links.workoutPage} target="_blank" rel="noreferrer" className={navButtonClass}>
        <Icons.activity className="h-4 w-4" />
        <span className="sr-only">WorkoutPage</span>
      </a>
      <a href={siteConfig.links.runningPage} target="_blank" rel="noreferrer" className={navButtonClass}>
        <Icons.running className="h-4 w-4" />
        <span className="sr-only">RunningPage</span>
      </a>
      <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className={navButtonClass}>
        <Icons.github className="h-4 w-4" />
        <span className="sr-only">GitHub</span>
      </a>
      <div className={navButtonClass}>
        <ThemeModeToggle />
      </div>
    </div>
  );
}
