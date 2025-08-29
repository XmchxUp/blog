import { Post } from "#site/content";
import Link from "next/link";
import AsideCard from "./aside-card";
import { categorizedPostsByYear, formatDate } from "@/lib/utils";
import Image from "next/image";

interface PostsByYearProp {
  title: string;
  posts: Array<Post>;
}

function PostsByYear({ title, posts }: PostsByYearProp) {
  const postsM: Record<string, Array<Post>> = categorizedPostsByYear(posts);
  return (
    <div className="space-y-8">
      <AsideCard>
        <div className="flex flex-col space-y-1.5 p-6">
          <h1 className="text-2xl font-medium tracking-tight">
            {decodeURIComponent(title)}
          </h1>
          <p className="text-muted-foreground text-sm">
            Total {posts.length} posts published.
          </p>
        </div>
      </AsideCard>
      <div className="space-y-8">
        {Object.keys(postsM)
          .sort((a, b) => parseInt(b) - parseInt(a))
          .map((year) => {
            return (
              <div className="space-y-4 mx-1" key={`posts-${year}`}>
                <h2 className="text-xl font-medium ml-2">{year}</h2>
                {postsM[year].map((post) => (
                  <div
                    className="flex flex-col gap-2"
                    key={`post-${post.slug}`}
                  >
                    <div className="print:rounded-none rounded-xl print:border-none border print:bg-transparent bg-card text-card-foreground print:shadow-none shadow flex flex-row items-center justify-between">
                      <div className="space-y-1 inline-flex flex-col h-full p-6 content-start pr-4 w-[calc(100%-128px)]">
                        <Link href={"/" + post.slug}>
                          <h3 className="font-semibold tracking-tight text-base truncate">
                            {post.title}
                          </h3>
                        </Link>
                        <p className="text-muted-foreground text-sm flex-row basis-auto gap-2 line-clamp-1 truncate">
                          <time>{formatDate(post.date)}</time>
                          <span> · </span>
                          <Link href={`/categories/${post.category}`}>
                            {post.category}
                          </Link>
                        </p>
                      </div>
                      {post.cover && (
                        <Link href={"/" + post.slug} className="h-24 w-32">
                          <Image
                            src={post.cover}
                            alt={post.title}
                            width={128}
                            height={96}
                            className="h-24 w-32 md:w-36 rounded-md rounded-l-none object-cover"
                            style={{ color: "transparent" }}
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default PostsByYear;
