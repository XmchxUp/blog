import { posts } from "#site/content";
import { sortPosts } from "@/lib/utils";
import MainPostItem from "@/components/post-item";
import { CustomPagination } from "@/components/custom-pagination";

const POSTS_PER_PAGE = 7;

const allSortedPosts = sortPosts(posts.filter((post) => !post.draft));
const totalPages = Math.ceil(allSortedPosts.length / POSTS_PER_PAGE);

interface HomePageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function Home(props: HomePageProps) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const displayPosts = allSortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="w-full flex flex-col gap-4">
        {displayPosts.map(
          (post) =>
            !post.draft && (
              <MainPostItem
                key={post.slug}
                title={post.title}
                category={post.category}
                slug={post.slug}
                description={post.description}
                date={post.date}
                cover={post.cover}
                excerpt={post.excerpt}
              />
            )
        )}
      </div>
      <CustomPagination
        totalPages={totalPages}
        className="mx-auto flex w-full justify-center"
      />
    </div>
  );
}
