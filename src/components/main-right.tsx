"use client";
import Link from "next/link";
import AsideCard from "./aside-card";
import { posts } from "#site/content";
import { getDateAgoFormat, sortPosts } from "@/lib/utils";
import WakaTimeStats from "./wakatime-stats";
import { useEffect, useState } from "react";
import { getRecentComment, RecentCommentData } from "@waline/api";

const WALINE_SERVER_URL =
  "https://waline-git-main-xmchxups-projects.vercel.app/";

const latestPosts = sortPosts(posts)
  .filter((p) => !p.draft)
  .slice(0, 5);

function MainRightAside() {


  const [recentComments, setRecentComments] = useState<RecentCommentData[]>([]);
  const [loadRecentCommentError, setLoadRecentCommentError] =
    useState<boolean>(false);
  const [loadingComments, setLoadingComments] = useState<boolean>(true);


  useEffect(() => {
    const fetchComments = async () => {
      try {
        const resp = await getRecentComment({
          serverURL: WALINE_SERVER_URL,
          count: 5,
          lang: navigator.language,
        });
        if ("data" in resp) {
          setRecentComments(resp.data as RecentCommentData[]);
          setLoadRecentCommentError(false);
        } else {
          setLoadRecentCommentError(true);
        }
      } catch (error) {
        setLoadRecentCommentError(true);
      } finally {
        setLoadingComments(false);
      }
    };
    fetchComments();
  }, []);

  const customLoadingDiv = () => {
    return (
      <div className="animate-pulse rounded-md bg-primary/10 w-full h-4"></div>
    );
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
            <WakaTimeStats />
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
            {latestPosts.map((post) => (
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
                  {getDateAgoFormat(post.date)}
                </span>
              </div>
            ))}
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
            {loadingComments ? (
              Array.from({ length: 5 }).map((_, index) => (
                <div key={`loading-comment-${index}`}>{customLoadingDiv()}</div>
              ))
            ) : recentComments.length > 0 ? (
              recentComments.map((comment) => (
                <div
                  className="flex flex-col w-full relative"
                  key={`re-comment-${comment.objectId}`}
                >
                  <Link
                    className="text-sm font-normal hover:underline truncate w-full"
                    href={`/${comment.url}`}
                  >
                    <div
                      className="prose prose-slate dark:prose-invert w-full text-sm font-normal"
                      dangerouslySetInnerHTML={{ __html: comment.comment }}
                    ></div>
                  </Link>
                  <span className="text-xs text-secondary-foreground">
                    {getDateAgoFormat(comment.time)}{" "}
                    <Link className="hover:underline" href={`/${comment.url}`}>
                      {comment.nick || "unknown"}
                    </Link>
                  </span>
                </div>
              ))
            ) : (
              <div className="p-6 flex flex-col pt-2 gap-2">
                <p className="py-12 text-center text-sm">
                  {loadRecentCommentError
                    ? "Error while fetching recent comments."
                    : ""}
                </p>
              </div>
            )}
          </div>
        </AsideCard>
      </div>
    </aside>
  );
}

export default MainRightAside;
