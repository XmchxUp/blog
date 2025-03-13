import { posts } from "#site/content";
import PostsByYear from "@/components/posts-by-year";

async function PostsPage() {
  return (
    <PostsByYear title={"Posts"} posts={posts.filter((post) => !post.draft)} />
  );
}

export default PostsPage;
