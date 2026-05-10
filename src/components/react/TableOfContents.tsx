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
  // Use a tree-based approach instead of stack
  const h2Items: TOCItem[] = [];

  let currentH2: TOCItem | null = null;

  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
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

      if (level === 2) {
        currentH2 = newItem;
        h2Items.push(newItem);
      } else if (level === 3 && currentH2) {
        if (!currentH2.children) {
          currentH2.children = [];
        }
        currentH2.children.push(newItem);
      }
    }
  }

  return h2Items;
}

function TableOfContentsItem({ item }: { item: TOCItem }) {
  const [isOpen, setIsOpen] = useState(false);

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
              : "text-xs text-muted-foreground ml-3"
          }`}
        >
          {item.text}
        </a>
      </div>
      {hasChildren && isOpen && (
        <ul className="mt-1 border-l border-border ml-3">
          {item.children!.map((child) => (
            <TableOfContentsItem key={child.id} item={child} />
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
    setToc(extracted);
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
