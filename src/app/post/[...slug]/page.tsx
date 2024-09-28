import { posts } from "#site/content";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx-components";
import "@/app/mdx.css";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams == slug);
  return post;
}

async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);
  if (!post || post.draft) {
    notFound();
  }

  return (
    <article className="print:rounded-none rounded-xl print:border-none border print:bg-transparent bg-card text-card-foreground print:shadow-none shadow w-full">
      <div className="flex flex-col space-y-1.5 p-6 pb-4">
        <h1 className="text-2xl font-medium tracking-tight" id="post-title">
          {post.title}
        </h1>
        <p className="text-muted-foreground text-sm flex flex-row gap-2">
          <time>{formatDate(post.date)}</time>
          <span> · </span>
          <a className="hover:underline" href={`/category/${post.category}`}>
            {post.category}
          </a>
        </p>
      </div>

      <div
        data-orientation="horizontal"
        role="none"
        className="shrink-0 bg-border h-[1px] w-full"
      ></div>
      <div className="p-6 pt-4">
        <div className="prose prose-slate dark:prose-invert text-pretty hyphens-auto">
          <MDXContent code={post.body} />
        </div>
      </div>
    </article>
  );
}

export default PostPage;
