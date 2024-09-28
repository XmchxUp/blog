import Link from "next/link";
import AsideCard from "./aside-card";
import { posts } from "#site/content";
import { sortPosts } from "@/lib/utils";

function MainRightAside() {
  const latestPosts = sortPosts(posts).slice(0, 5);

  const getDaysAgo = (input: string | number) => {
    const d = new Date(input);
    const today = new Date();

    const diffInMs = today.getTime() - d.getTime();

    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    return `${days} days ago`;
  };

  return (
    <aside className="order-1 col-span-1 hidden lg:block">
      <div className="flex flex-col gap-4 w-full sticky top-4">
        {/* Wakatime */}
        <AsideCard>
          <div className="flex flex-col space-y-1.5 p-6 pb-2 pt-4">
            <h3 className="tracking-tight text-md font-normal">Coding Stats</h3>
          </div>
          <div className="p-6 flex flex-col pt-2 gap-2">
            <div className="flex flex-row justify-between">
              <span className="text-sm">Daily Average</span>
              <span className="text-sm">2 hrs 5 mins</span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-sm">Last Week Total</span>
              <span className="text-sm">12 hrs 5 mins</span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-sm">Working Days</span>
              <span className="text-sm">6 Days</span>
            </div>
          </div>
        </AsideCard>

        {/* Recent Articles  */}
        <AsideCard>
          <div className="flex flex-col space-y-1.5 p-6 pb-2 pt-4">
            <h3 className="tracking-tight text-md font-normal">
              Recent Articles
            </h3>
          </div>
          <div className="p-6 flex flex-col pt-2 gap-2">
            {latestPosts.map(
              (post) =>
                !post.draft && (
                  <div
                    className="flex flex-col w-full"
                    key={`recent-articles-${post.slug}`}
                  >
                    <Link
                      className="text-sm font-normal hover:underline"
                      href={`/${post.slug}`}
                    >
                      {post.title}
                    </Link>
                    <span className="text-xs text-secondary-foreground">
                      {getDaysAgo(post.date)}
                    </span>
                  </div>
                )
            )}
          </div>
        </AsideCard>

        {/* Recent Comments */}
        <AsideCard>
          <div className="flex flex-col space-y-1.5 p-6 pb-2 pt-4">
            <h3 className="tracking-tight text-md font-normal">
              Recent Comments
            </h3>
          </div>
          <div className="p-6 flex flex-col pt-2 gap-2">
            <div className="flex flex-col w-full relative">
              {/* TODO: add comment link to post */}
              <Link
                className="text-sm font-normal hover:underline truncate w-full"
                href={"/xxxx"}
                target="_blank"
              >
                <div className="prose prose-slate dark:prose-invert w-full">
                  <p className="text-sm font-normal">懒得喷，扣 1 送雄安户口</p>
                </div>
              </Link>
              <span className="text-xs text-secondary-foreground">
                18 hours ago by{" "}
                {/* TODO: add comment author blog link & name */}
                <Link
                  className="hover:underline"
                  href={"/xxxx"}
                  target="_blank"
                >
                  xxxx
                </Link>
              </span>
            </div>
          </div>
        </AsideCard>
      </div>
    </aside>
  );
}

export default MainRightAside;
