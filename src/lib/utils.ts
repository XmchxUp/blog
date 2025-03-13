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

export function categorizedPostsByYear(posts: Array<Post>) {
  const categorizedPosts = posts.reduce<Record<string, Post[]>>((acc, post) => {
    const year = new Date(post.date).getFullYear().toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});

  const res: Record<string, Post[]> = {};

  Object.keys(categorizedPosts).forEach((year) => {
    res[year] = categorizedPosts[year].sort((a, b) => {
      return b.date.localeCompare(a.date);
    });
  });

  return res;
}

export const isValidEmail = (email: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

export const getDateAgoFormat = (input: string | number) => {
  const d = new Date(input);
  const today = new Date();

  const diffInMs = today.getTime() - d.getTime();

  if (diffInMs < 0) {
    return "just now";
  }

  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));

  if (days > 0) {
    return `${days} days ago`;
  } else if (hours > 0) {
    return `${hours} hours ago`;
  } else {
    return `${minutes} minutes ago`;
  }
};
