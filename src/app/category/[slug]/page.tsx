import { posts } from "#site/content";
import PostsByYear from "@/components/posts-by-year";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

async function getPostsFromParams(params: CategoryPageProps["params"]) {
  const slug = decodeURIComponent(params.slug);
  return posts.filter((post) => !post.draft && post.category == slug);
}

async function CategoryPage({ params }: CategoryPageProps) {
  const curPosts = await getPostsFromParams(params);

  return <PostsByYear title={`Category: ${params.slug}`} posts={curPosts} />;
}

export default CategoryPage;
