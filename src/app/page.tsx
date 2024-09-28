import { posts } from "#site/content";
import { sortPosts } from "@/lib/utils";
import PostItem from "@/components/post-item";
import { PostPagination } from "@/components/PostPagination";

const POSTS_PER_PAGE = 5;

interface HomePageProps {
  searchParams: {
    page?: string;
  };
}

export default function Home({ searchParams }: HomePageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const allSortedPosts = sortPosts(posts.filter((post) => !post.draft));
  const displayPosts = allSortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );
  const totalPages = Math.ceil(allSortedPosts.length / POSTS_PER_PAGE);

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="w-full flex flex-col gap-4">
        {displayPosts.map(
          (post) =>
            !post.draft && (
              <PostItem
                key={post.slug}
                title={post.title}
                category={post.category}
                slug={post.slug}
                description={post.description}
                date={post.date}
                cover={post.cover}
              />
            )
        )}
      </div>
      <PostPagination
        totalPages={totalPages}
        className="mx-auto flex w-full justify-center"
      />
    </div>
  );
}
