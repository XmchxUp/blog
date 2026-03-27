import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import NavbarActions from "./NavbarActions";

export default function MobileNavbar() {
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
        </SheetHeader>
        <hr className="my-4" />
        <div className="flex flex-col items-center space-y-8 py-4">
          <div className="flex flex-col gap-2 w-full">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-medium rounded-md bg-background px-4 py-2 hover:bg-accent text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
          <NavbarActions />
        </div>
      </SheetContent>
    </Sheet>
  );
}
