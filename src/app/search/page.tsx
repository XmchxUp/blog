"use client";
import { Post, posts } from "#site/content";
import { Input } from "@/components/ui/input";
import Fuse, { FuseResult } from "fuse.js";
import Link from "next/link";
import { useState } from "react";

function SearchPage() {
  const [input, setInput] = useState<string>("");
  const [items, setItems] = useState<Array<FuseResult<Post>>>([]);

  const fuse = new Fuse(posts, {
    keys: ["title", "tag", "body"],
    includeScore: true,
    includeMatches: true,
    shouldSort: true,
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const results = fuse.search(value);
    setItems(results);

    setInput(value);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="print:rounded-none rounded-xl print:border-none border print:bg-transparent bg-card text-card-foreground print:shadow-none shadow">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold tracking-tight text-xl">Search</h3>
          <p className="text-sm text-muted-foreground">
            Find posts by title, content, or tags.
          </p>
        </div>
        <div className="p-6 pt-0">
          <Input
            className="flex rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 shadow-none border-none w-full h-10"
            placeholder="Search"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            maxLength={64}
            type="search"
            onChange={handleSearch}
            value={input}
          />
        </div>
      </div>
      <div className="print:rounded-none rounded-xl print:border-none border print:bg-transparent bg-card text-card-foreground print:shadow-none shadow">
        <div className="flex flex-col space-y-1.5 p-6">
          <p className="text-sm text-muted-foreground">Results</p>
        </div>

        <div className="p-6 pt-0 gap-4 flex flex-col">
          {items.length == 0 ? (
            <p className="text-sm text-center py-8">
              No results found. Try another query.
            </p>
          ) : (
            items.map((item) => (
              <Link
                key={`post-${item.item.slug}`}
                className="flex flex-col items-start gap-1"
                href={"/" + item.item.slug}
              >
                <h2 className="text-base font-medium">{item.item.title}</h2>
                <span className="text-sm">{item.item.excerpt}</span>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
