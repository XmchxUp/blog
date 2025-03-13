import { posts } from "#site/content";
import PostsByYear from "@/components/posts-by-year";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getPostsFromSlug(slug: string) {
  return posts.filter((post) => !post.draft && post.category == slug);
}

async function CategoryPage(props: CategoryPageProps) {
  const params = await props.params;
  const curPosts = await getPostsFromSlug(params.slug);

  return <PostsByYear title={`Category: ${params.slug}`} posts={curPosts} />;
}

export default CategoryPage;
