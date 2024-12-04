import { posts } from "#site/content";
import PostsByYear from "@/components/posts-by-year";

interface Params {
  slug: string;
}

interface TagPageProps {
  params: Promise<Params>;
}

async function getPostsFromParams(params: Params) {
  const slug = decodeURIComponent(params.slug);
  return posts.filter((post) => !post.draft && post.tags?.includes(slug));
}

async function CategoryPage(props: TagPageProps) {
  const params = await props.params;
  const curPosts = await getPostsFromParams(params);

  return <PostsByYear title={`Tag: ${params.slug}`} posts={curPosts} />;
}

export default CategoryPage;
