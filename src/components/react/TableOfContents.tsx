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

function TableOfContentsItem({ item }: { item: TOCItem }) {
  return (
    <li className="my-1">
      <a
        href={`#${item.id}`}
        className={`block truncate hover:text-primary transition-colors ${
          item.level === 2 ? "text-sm font-medium" : "text-xs text-muted-foreground ml-4"
        }`}
      >
        {item.text}
      </a>
      {item.children && item.children.length > 0 && (
        <ul>
          {item.children.map((child) => (
            <TableOfContentsItem key={child.id} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function TableOfContents({ content }: Props) {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const extracted = extractTOC(content);
    // Only show h2 and h3, filter out h4+
    const filtered = extracted
      .map((item) => ({
        ...item,
        children: item.children?.filter((child) => child.level === 3),
      }))
      .filter((item) => item.level === 2 || (item.level === 3 && item.children));
    setToc(filtered);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("h2[id], h3[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
        <ul className="max-h-[500px] overflow-y-auto pr-1 custom-scrollbar">
          {toc.map((item) => (
            <TableOfContentsItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
