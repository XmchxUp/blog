import { posts } from "#site/content";
import { sortPosts } from "@/lib/utils";
import PostItem from "@/components/post-item";

export default function Home() {
  const latestPosts = sortPosts(posts);

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="w-full flex flex-col gap-4">
        {latestPosts.map(
          (post) =>
            !post.draft && (
              <PostItem
                title={post.title}
                category={post.category}
                slug={post.slug}
                description={post.description}
                date={post.date}
              />
            )
        )}
      </div>
      <nav className="mx-auto flex w-full justify-center">pagination</nav>
    </div>
  );
}
