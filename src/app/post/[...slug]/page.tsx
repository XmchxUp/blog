import { posts } from "#site/content";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx-components";
import "@/app/mdx.css";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import CustomWalineComment from "@/components/comment";

export async function generateMetadata(props: PostPageProps): Promise<Metadata> {
  const params = await props.params;
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<
  Params[]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

interface Params {
  slug: string[];
}

interface PostPageProps {
  params: Promise<Params>;
}

async function getPostFromParams(params: Params) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams == slug);
  return post;
}

async function PostPage(props: PostPageProps) {
  const params = await props.params;
  const post = await getPostFromParams(params);
  if (
    !post ||
    (post.draft &&
      post.slugAsParams != "about" &&
      post.slugAsParams != "hobby_project")
  ) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-4">
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
      <CustomWalineComment postPath={post.slug} />
      <ScrollToTop />
    </div>
  );
}

export default PostPage;
