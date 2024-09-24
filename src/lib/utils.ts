import { Post } from "#site/content";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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

export function sortPosts(posts: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}

export function getAllTags(posts: Array<Post>) {
  const tags: Record<string, number> = {};
  posts.forEach((post) => {
    if (!post.draft) {
      post.tags?.forEach((tag) => {
        tags[tag] = (tags[tag] ?? 0) + 1;
      });
    }
  });
  return tags;
}

export function getAllCategory(posts: Array<Post>) {
  const categories: Record<string, number> = {};
  posts.forEach((post) => {
    if (!post.draft) {
      categories[post.category] = (categories[post.category] ?? 0) + 1;
    }
  });
  return categories;
}

export function getArchives(posts: Array<Post>) {
  const archives: Record<string, number> = {};
  posts.forEach((post) => {
    if (!post.draft) {
      const year = new Date(post.date).getFullYear();
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
