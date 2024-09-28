import { posts } from "#site/content";
import "@/app/mdx.css";
import AsideCard from "@/components/aside-card";
import { categorizedPostsByYear, formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

async function getPostsFromParams(params: CategoryPageProps["params"]) {
  return posts.filter(
    (post) =>
      !post.draft && post.category.toLowerCase() == params.slug.toLowerCase()
  );
}

async function CategoryPage({ params }: CategoryPageProps) {
  const posts = await getPostsFromParams(params);
  const res = categorizedPostsByYear(posts);

  return (
    <div className="space-y-8">
      <AsideCard>
        <div className="flex flex-col space-y-1.5 p-6">
          <h1 className="text-2xl font-medium tracking-tight">
            Category: {params.slug}
          </h1>
          <p className="text-muted-foreground text-sm">
            Total {posts.length} posts published.
          </p>
        </div>
      </AsideCard>
      <div className="space-y-8">
        {Object.keys(res)
          .sort((a, b) => parseInt(b) - parseInt(a))
          .map((year) => {
            console.log("====", year);
            return (
              <>
                <div className="space-y-4 mx-1" key={`posts-${year}`}>
                  <h2 className="text-xl font-medium ml-2">{year}</h2>
                  {res[year].map((post) => (
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
                            <Link href={`/category/${post.category}`}>
                              {post.category}
                            </Link>
                          </p>
                        </div>
                        <Link href={"/"} className="h-24 w-32">
                          <Image
                            src={
                              "https://images.unsplash.com/photo-1613040475057-c9f42557d07c?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            }
                            alt="test"
                            width={128}
                            height={96}
                            className="h-24 w-32 md:w-36 rounded-md rounded-l-none object-cover"
                            style={{ color: "transparent" }}
                          />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default CategoryPage;
