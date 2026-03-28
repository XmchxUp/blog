import WakaTimeStats from "./WakaTimeStats";
import { getDateAgoFormat } from "@/lib/utils";
import { siteConfig } from "@/config/site";

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
      <div className="flex flex-col gap-3 w-full sticky top-16">
        {/* WakaTime */}
        <AsideCard>
          <div className="px-4 pt-4 pb-1">
            <a
              href={siteConfig.wakatimeUrl}
              className="text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              Coding Stats
            </a>
          </div>
          <div className="px-4 pb-4 pt-2 flex flex-col gap-2">
            <WakaTimeStats />
          </div>
        </AsideCard>

        {/* Recent Articles */}
        <AsideCard>
          <div className="px-4 pt-4 pb-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Recent Articles</h3>
          </div>
          <div className="px-4 pb-4 pt-2 flex flex-col gap-3">
            {recentPosts.map((post) => {
              const slug = post.id.replace(/\.mdx?$/, "");
              return (
                <div className="flex flex-col gap-0.5 w-full" key={`recent-${post.id}`}>
                  <a
                    className="text-sm font-medium leading-snug hover:text-primary transition-colors"
                    href={`/post/${slug}`}
                  >
                    {post.title}
                  </a>
                  <span className="text-xs text-muted-foreground">
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
