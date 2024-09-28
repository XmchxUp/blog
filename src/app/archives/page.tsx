import { posts } from "#site/content";
import PostsByYear from "@/components/posts-by-year";

async function ArchivePage() {
  return (
    <PostsByYear
      title={"Archives"}
      posts={posts.filter((post) => !post.draft)}
    />
  );
}

export default ArchivePage;
