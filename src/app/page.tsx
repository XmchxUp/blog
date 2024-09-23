import Link from "next/link";
import { Post, posts } from "#site/content";
import { formatDate } from "@/lib/utils";

export default function Home() {
  const sortPosts = (posts: Array<Post>) => {
    return posts.sort((a, b) => {
      if (a.date > b.date) return -1;
      if (a.date < b.date) return 1;
      return 0;
    });
  };
  const latestPosts = sortPosts(posts);

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="w-full flex flex-col gap-4">
        {latestPosts.map(
          (post) =>
            !post.draft && (
              <div
                className="rounded-xl border bg-card text-card-foreground shadow "
                title={post.title}
                key={post.slug}
              >
                <div className="flex flex-col space-y-1.5 p-6 pb-2">
                  <Link href="/">
                    <h3 className="text-2xl font-medium tracking-tight">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground flex flex-row flex-nowrap gap-2">
                    <time>{formatDate(post.date)}</time>
                    <span> · </span>
                    <a
                      title={post.category}
                      className="hover:underline"
                      href={`/category/${post.category}`}
                    >
                      {post.category}
                    </a>
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className=" text-pretty hyphens-auto ">
                    {post.description}
                  </div>
                </div>
              </div>
            )
        )}
      </div>
      <nav className="mx-auto flex w-full justify-center">pagination</nav>
    </div>
  );
}
