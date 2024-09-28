import { posts } from "#site/content";
import PostsByYear from "@/components/posts-by-year";

interface TagPageProps {
  params: {
    slug: string;
  };
}

async function getPostsFromParams(params: TagPageProps["params"]) {
  const slug = decodeURIComponent(params.slug);
  return posts.filter((post) => !post.draft && post.tags?.includes(slug));
}

async function CategoryPage({ params }: TagPageProps) {
  const curPosts = await getPostsFromParams(params);

  return <PostsByYear title={`Tag: ${params.slug}`} posts={curPosts} />;
}

export default CategoryPage;
