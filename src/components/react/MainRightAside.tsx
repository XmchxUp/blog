import useSWR from "swr";
import WakaTimeStats from "./WakaTimeStats";
import { getDateAgoFormat } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import TableOfContents from "./TableOfContents";

interface RecentComment {
  author: string;
  avatarUrl: string;
  bodyText: string;
  createdAt: string;
  url: string;
  postTitle: string;
  postUrl: string | null;
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function RecentComments() {
  const { data, isLoading } = useSWR("/api/github-comments", fetcher, {
    refreshInterval: 0,
    revalidateOnFocus: false,
    dedupingInterval: 300_000, // 5 min
  });

  const comments: RecentComment[] = data?.comments ?? [];

  if (isLoading) {
    return (
      <div className="flex flex-col gap-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-start gap-2 animate-pulse">
            <div className="w-6 h-6 rounded-full bg-primary/10 shrink-0" />
            <div className="flex flex-col gap-1 flex-1">
              <div className="h-3 bg-primary/10 rounded w-3/4" />
              <div className="h-3 bg-primary/10 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (comments.length === 0) {
    return <p className="text-xs text-muted-foreground">No comments yet.</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      {comments.map((c) => (
        <a
          key={c.url}
          href={c.postUrl ?? c.url}
          target={c.postUrl ? undefined : "_blank"}
          rel={c.postUrl ? undefined : "noreferrer"}
          className="flex items-start gap-2 group"
        >
          <img
            src={c.avatarUrl}
            alt={c.author}
            width={24}
            height={24}
            className="w-6 h-6 rounded-full shrink-0 border border-border mt-0.5"
          />
          <div className="flex flex-col gap-0.5 min-w-0">
            <p className="text-xs text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
              {c.bodyText.slice(0, 80)}{c.bodyText.length > 80 ? "…" : ""}
            </p>
            <span className="text-xs text-muted-foreground truncate">
              {c.author} · {getDateAgoFormat(c.createdAt)}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}

interface RecentPost {
  id: string;
  title: string;
  date: string;
}

interface Props {
  recentPosts: RecentPost[];
  tableOfContents?: string;
}

function AsideCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`rounded-xl border bg-card text-card-foreground shadow ${className ?? ""}`}>
      {children}
    </div>
  );
}

export default function MainRightAside({ recentPosts, tableOfContents }: Props) {
  return (
    <aside className="order-1 hidden lg:block">
      <div className="flex flex-col gap-3 w-full sticky top-16">
        {/* Table of Contents */}
        {tableOfContents && (
          <AsideCard>
            <TableOfContents content={tableOfContents} />
          </AsideCard>
        )}

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

        {/* Recent Comments */}
        <AsideCard>
          <div className="px-4 pt-4 pb-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Recent Comments</h3>
          </div>
          <div className="px-4 pb-4 pt-2">
            <RecentComments />
          </div>
        </AsideCard>
      </div>
    </aside>
  );
}
