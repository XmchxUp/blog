"use client";

import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
  children?: TOCItem[];
}

interface Props {
  content: string;
}

function extractTOC(content: string): TOCItem[] {
  const lines = content.split("\n");
  const toc: TOCItem[] = [];
  const stack: TOCItem[] = [];

  for (const line of lines) {
    const match = line.match(/^(#{2,6})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();

      // Remove markdown links from toc text
      const cleanText = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

      const newItem: TOCItem = {
        id: cleanText.toLowerCase().replace(/[^\w一-龥]+/g, "-"),
        text: cleanText,
        level,
      };

      // Find parent node
      while (stack.length > 0 && stack[stack.length - 1].level >= level) {
        stack.pop();
      }

      if (stack.length === 0) {
        toc.push(newItem);
      } else {
        const parent = stack[stack.length - 1];
        if (!parent.children) {
          parent.children = [];
        }
        parent.children.push(newItem);
      }

      stack.push(newItem);
    }
  }

  return toc;
}

function TableOfContentsItem({ item, level = 0 }: { item: TOCItem; level?: number }) {
  const [isOpen, setIsOpen] = useState(level < 2);

  // Auto-expand h2 items, collapse h3 items by default
  useEffect(() => {
    if (item.level === 2) {
      setIsOpen(true);
    }
  }, [item.level]);

  const hasChildren = item.children && item.children.length > 0;

  return (
    <li className="my-1">
      <div className="flex items-center">
        {hasChildren && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mr-1 p-0.5 hover:bg-accent rounded transition-colors"
            aria-label={isOpen ? "Collapse" : "Expand"}
          >
            <svg
              className={`w-3 h-3 transition-transform ${isOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
        <a
          href={`#${item.id}`}
          className={`block truncate hover:text-primary transition-colors ${
            item.level === 2
              ? "text-sm font-medium"
              : item.level === 3
              ? "text-xs text-muted-foreground ml-3"
              : "text-xs text-muted-foreground ml-6"
          }`}
        >
          {item.text}
        </a>
      </div>
      {hasChildren && isOpen && (
        <ul className="mt-1">
          {item.children!.map((child) => (
            <TableOfContentsItem key={child.id} item={child} level={child.level} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function TableOfContents({ content }: Props) {
  const [toc, setToc] = useState<TOCItem[]>([]);

  useEffect(() => {
    const extracted = extractTOC(content);
    // Only show h2 and h3
    const filtered = extracted
      .map((item) => ({
        ...item,
        children: item.children?.filter((child) => child.level === 3),
      }))
      .filter((item) => item.level === 2 || (item.level === 3 && item.children));
    setToc(filtered);
  }, [content]);

  if (toc.length === 0) {
    return null;
  }

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow">
      <div className="px-4 pt-4 pb-1">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Table of Contents
        </h3>
      </div>
      <div className="px-4 pb-4 pt-2">
        <ul className="space-y-1">
          {toc.map((item) => (
            <TableOfContentsItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
