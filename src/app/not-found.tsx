import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="w-full flex flex-col items-center gap-8 py-16">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl">404 Not Found</h2>
        <p>Check the URL try again.</p>
      </div>
      <Link href="/" className="">
        <Button>Go back home</Button>
      </Link>
    </div>
  );
}
