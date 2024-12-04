import { posts } from "#site/content";
import PostsByYear from "@/components/posts-by-year";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getPostsFromParams(params: CategoryPageProps["params"]) {
  const slug = decodeURIComponent(params.slug);
  return posts.filter((post) => !post.draft && post.category == slug);
}

async function CategoryPage(props: CategoryPageProps) {
  const params = await props.params;
  const curPosts = await getPostsFromParams(params);

  return <PostsByYear title={`Category: ${params.slug}`} posts={curPosts} />;
}

export default CategoryPage;
