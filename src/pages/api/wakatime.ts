import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async (context) => {
  const apiKey = (context.locals.runtime.env.WAKATIME_API_KEY as string) ?? "";
  try {
    const response = await fetch(
      "https://wakatime.com/api/v1/users/current/stats/last_7_days",
      {
        headers: {
          Authorization: `Basic ${btoa(apiKey)}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Upstream error: ${response.status}`);
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
