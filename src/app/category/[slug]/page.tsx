import { posts } from "#site/content";
import PostsByYear from "@/components/posts-by-year";

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
  const curPosts = await getPostsFromParams(params);

  return <PostsByYear title={`Category: ${params.slug}`} posts={curPosts} />;
}

export default CategoryPage;
