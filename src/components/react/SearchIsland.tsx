import { useState, useMemo } from "react";
import Fuse, { type FuseResult } from "fuse.js";
import { Input } from "@/components/ui/input";

interface SearchPost {
  slug: string;
  title: string;
  tags: string[];
  excerpt: string;
}

interface Props {
  posts: SearchPost[];
}

export default function SearchIsland({ posts }: Props) {
  const [input, setInput] = useState("");
  const [items, setItems] = useState<FuseResult<SearchPost>[]>([]);

  const fuse = useMemo(() => new Fuse(posts, {
    keys: ["title", "tags", "excerpt"],
    includeScore: true,
    includeMatches: true,
    shouldSort: true,
  }), [posts]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setItems(value ? fuse.search(value) : []);
    setInput(value);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="card-base">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold tracking-tight text-xl">Search</h3>
          <p className="text-sm text-muted-foreground">
            Find posts by title, content, or tags.
          </p>
        </div>
        <div className="p-6 pt-0">
          <Input
            className="flex rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring shadow-none border-none w-full h-10"
            placeholder="Search"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            maxLength={64}
            type="search"
            onChange={handleSearch}
            value={input}
          />
        </div>
      </div>
      <div className="card-base">
        <div className="flex flex-col space-y-1.5 p-6">
          <p className="text-sm text-muted-foreground">Results</p>
        </div>
        <div className="p-6 pt-0 gap-4 flex flex-col">
          {items.length === 0 ? (
            <p className="text-sm text-center py-8">
              No results found. Try another query.
            </p>
          ) : (
            items.map((item) => (
              <a
                key={`post-${item.item.slug}`}
                className="flex flex-col items-start gap-1"
                href={`/post/${item.item.slug}`}
              >
                <h2 className="text-base font-medium">{item.item.title}</h2>
                <span className="text-sm">{item.item.excerpt}</span>
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
