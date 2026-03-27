import WakaTimeStats from "./WakaTimeStats";
import { getDateAgoFormat } from "@/lib/utils";

interface RecentPost {
  id: string;
  title: string;
  date: string;
}

interface Props {
  recentPosts: RecentPost[];
}

function AsideCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`rounded-xl border bg-card text-card-foreground shadow ${className ?? ""}`}>
      {children}
    </div>
  );
}

export default function MainRightAside({ recentPosts }: Props) {
  return (
    <aside className="order-1 hidden lg:block">
      <div className="flex flex-col gap-4 w-full sticky top-4">
        {/* WakaTime */}
        <AsideCard>
          <div className="flex flex-col space-y-1.5 p-6 pb-2 pt-4">
            <a
              href="https://wakatime.com/@Tesla"
              className="tracking-tight text-md font-normal"
            >
              Coding Stats
            </a>
          </div>
          <div className="p-6 flex flex-col pt-2 gap-2">
            <WakaTimeStats />
          </div>
        </AsideCard>

        {/* Recent Articles */}
        <AsideCard>
          <div className="flex flex-col space-y-1.5 p-6 pb-2 pt-4">
            <h3 className="tracking-tight text-md font-normal">Recent Articles</h3>
          </div>
          <div className="p-6 flex flex-col pt-2 gap-2">
            {recentPosts.map((post) => {
              const slug = post.id.replace(/\.mdx?$/, "");
              return (
                <div className="flex flex-col w-full" key={`recent-${post.id}`}>
                  <a
                    className="text-sm font-normal hover:underline"
                    href={`/post/${slug}`}
                  >
                    {post.title}
                  </a>
                  <span className="text-xs text-secondary-foreground">
                    {getDateAgoFormat(post.date)}
                  </span>
                </div>
              );
            })}
          </div>
        </AsideCard>
      </div>
    </aside>
  );
}
