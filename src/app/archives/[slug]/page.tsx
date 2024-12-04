import { posts } from "#site/content";
import PostsByYear from "@/components/posts-by-year";

interface Params {

  slug: string;
}

interface ArchivePageProps {
  params: Promise<Params>;
}

async function getPostsFromParams(params: Params) {
  return posts.filter(
    (post) =>
      !post.draft && String(new Date(post.date).getFullYear()) === params.slug
  );
}

async function ArchivePage(props: ArchivePageProps) {
  const params = await props.params;
  const curPosts = await getPostsFromParams(params);

  if (params.slug) {
    return <PostsByYear title={`${params.slug} Archives`} posts={curPosts} />;
  } else {
    return (
      <PostsByYear
        title={"Archives"}
        posts={posts.filter((post) => !post.draft)}
      />
    );
  }
}

export default ArchivePage;
