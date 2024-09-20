import { ThemeModeToggle } from "./theme-mode-toggle";

function SiteHeader() {
  return (
    <header className=" w-full bg-background h-auto overflow-x-hidden shadow">
      <ThemeModeToggle />
    </header>
  );
}

export default SiteHeader;
