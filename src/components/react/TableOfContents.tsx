"use client";

import { useEffect, useState, useRef } from "react";

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

      // Pop items with level >= current level
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

function TableOfContentsItem({ item, depth = 0 }: { item: TOCItem; depth?: number }) {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <li className="group">
      <a
        href={`#${item.id}`}
        className={`flex items-center py-1.5 pr-3 -ml-3 rounded-md hover:bg-accent transition-colors ${
          depth === 0
            ? "text-sm font-medium text-foreground"
            : "text-xs text-muted-foreground hover:text-foreground pl-6"
        }`}
      >
        {hasChildren && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
            className={`mr-2 p-0.5 rounded transition-transform ${
              isOpen ? "rotate-180" : ""
            } hover:bg-accent/50`}
            aria-label={isOpen ? "Collapse" : "Expand"}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
        <span className="truncate">{item.text}</span>
      </a>
      {hasChildren && isOpen && (
        <ul className="border-l border-border ml-3">
          {item.children!.map((child) => (
            <TableOfContentsItem key={child.id} item={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function TableOfContents({ content }: Props) {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setToc(extractTOC(content));
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
    <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
      <div className="px-4 pt-4 pb-2 border-b border-border">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          On This Page
        </h3>
      </div>
      <div ref={containerRef} className="px-4 py-3 max-h-[60vh] overflow-y-auto custom-scrollbar">
        <ul className="space-y-0.5">
          {toc.map((item) => (
            <TableOfContentsItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
