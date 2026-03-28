import type { APIRoute } from "astro";
import { siteConfig } from "@/config/site";

export const prerender = false;

const [owner, name] = siteConfig.giscus.repo.split("/");

const QUERY = `
  query RecentComments($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      discussions(first: 20, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          title
          comments(last: 3) {
            nodes {
              author {
                login
                avatarUrl(size: 40)
              }
              bodyText
              createdAt
              url
            }
          }
        }
      }
    }
  }
`;

export const GET: APIRoute = async (context) => {
  const token = (context.locals.runtime?.env?.GITHUB_TOKEN as string) ?? "";

  if (!token) {
    return new Response(JSON.stringify({ comments: [] }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query: QUERY, variables: { owner, name } }),
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`GitHub API error: ${response.status} - ${body}`);
    }

    const json = await response.json();
    const discussions = json.data?.repository?.discussions?.nodes ?? [];

    const comments = discussions
      .flatMap((d: any) =>
        d.comments.nodes.map((c: any) => ({
          author: c.author?.login ?? "ghost",
          avatarUrl: c.author?.avatarUrl ?? "",
          bodyText: c.bodyText,
          createdAt: c.createdAt,
          url: c.url,
          postTitle: d.title,
        }))
      )
      .sort(
        (a: any, b: any) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .slice(0, 5);

    return new Response(JSON.stringify({ comments }), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ comments: [], error: String(error) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
