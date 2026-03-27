import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export type PostData = {
  title: string;
  date: string;
  category: string;
  cover?: string;
  description?: string;
  draft: boolean;
  tags?: string[];
};

export type PostEntry = {
  id: string;
  slug: string;
  body: string;
  data: PostData;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function sortPosts(posts: Array<PostEntry>) {
  return posts.sort((a, b) => {
    if (a.data.date > b.data.date) return -1;
    if (a.data.date < b.data.date) return 1;
    return 0;
  });
}

export function getAllTag(posts: Array<PostEntry>) {
  const tags: Record<string, number> = {};
  posts.forEach((post) => {
    if (!post.data.draft) {
      post.data.tags?.forEach((tag) => {
        tags[tag] = (tags[tag] ?? 0) + 1;
      });
    }
  });
  return tags;
}

export function getAllCategory(posts: Array<PostEntry>) {
  const categories: Record<string, number> = {};
  posts.forEach((post) => {
    if (!post.data.draft) {
      categories[post.data.category] =
        (categories[post.data.category] ?? 0) + 1;
    }
  });
  return categories;
}

export function getAllArchive(posts: Array<PostEntry>) {
  const archives: Record<string, number> = {};
  posts.forEach((post) => {
    if (!post.data.draft) {
      const year = new Date(post.data.date).getFullYear();
      archives[year] = (archives[year] ?? 0) + 1;
    }
  });
  return archives;
}

export function sortByDate(elements: Record<string, number>, desc?: boolean) {
  return Object.keys(elements).sort((a: string, b: string) => {
    if (desc) {
      return b.localeCompare(a);
    }
    return a.localeCompare(b);
  });
}

export function sortByCount(elements: Record<string, number>, desc?: boolean) {
  return Object.keys(elements).sort((a, b) => {
    if (desc) {
      return elements[b] - elements[a];
    }
    return elements[a] - elements[b];
  });
}

export function categorizedPostsByYear(posts: Array<PostEntry>) {
  const categorizedPosts = posts.reduce<Record<string, PostEntry[]>>(
    (acc, post) => {
      const year = new Date(post.data.date).getFullYear().toString();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(post);
      return acc;
    },
    {}
  );

  const res: Record<string, PostEntry[]> = {};
  Object.keys(categorizedPosts).forEach((year) => {
    res[year] = categorizedPosts[year].sort((a, b) => {
      return b.data.date.localeCompare(a.data.date);
    });
  });

  return res;
}

export function getPostSlug(id: string) {
  return id.replace(/\.mdx?$/, "");
}

export const getDateAgoFormat = (input: string | number) => {
  const d = new Date(input);
  const today = new Date();
  const diffInMs = today.getTime() - d.getTime();

  if (diffInMs < 0) return "just now";

  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));

  if (days > 0) return `${days} days ago`;
  if (hours > 0) return `${hours} hours ago`;
  return `${minutes} minutes ago`;
};
