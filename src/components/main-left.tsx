import Image from "next/image";
import profilePic from "@/app/me.png";
import Link from "next/link";
import AsideCard from "./aside-card";
import { posts } from "#site/content";
import {
  getAllTags as getAllTag,
  getAllCategory,
  sortByCount,
  getArchives as getAllArchive,
  sortByDate,
} from "@/lib/utils";

const categories = getAllCategory(posts);
const tags = getAllTag(posts);
const archives = getAllArchive(posts);

function MainLeftAside() {
  return (
    <aside className="-order-1 col-span-1 hidden md:block">
      <div className="flex flex-col gap-4 w-full sticky top-3 lg:top-4">
        {/* Profile Card */}
        <AsideCard className="pt-6 px-2">
          <div className="flex flex-col pt-0 p-6 items-center">
            <div className="w-24 h-24 rounded-full border-2 border-gray-100">
              <Image src={profilePic} alt="Picture of the author" />
            </div>
            <div className="flex flex-col items-center pt-2">
              <span className="text-2xl text-primary font-medium">Xmchx</span>
              <span className="text-sm text-primary truncate">
                Technology & Life
              </span>
            </div>
            <div className="flex flex-row gap-4 justify-center w-full pt-4">
              <div className="flex flex-col gap-1 items-center">
                <span className="text-lg truncate text-primary">
                  {posts.filter((post) => !post.draft).length}
                </span>
                <span className="text-sm text-primary">Posts</span>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <span className="text-lg truncate text-primary">
                  {Object.keys(categories).length}
                </span>
                <span className="text-sm text-primary">Categories</span>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <span className="text-lg truncate text-primary">
                  {Object.keys(tags).length}
                </span>
                <span className="text-sm text-primary">Tags</span>
              </div>
            </div>
          </div>
        </AsideCard>

        {/* Categories Card */}
        <AsideCard>
          <div className="flex flex-col space-y-1.5 p-6 pb-2 pt-4">
            <h3 className="text-md font-normal tracking-tight">Categories</h3>
          </div>
          <div className="flex flex-col space-y-1 px-4 p-6 pt-0">
            {sortByCount(categories, true).map((category) => {
              return (
                <Link
                  key={category}
                  href={`/category/${category}`}
                  className="items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs flex flex-row gap-2 w-full font-normal"
                >
                  <span className="text-sm flex-grow truncate">{category}</span>
                  <span className="text-sm">{categories[category]}</span>
                </Link>
              );
            })}
          </div>
        </AsideCard>

        {/* Archives Card */}
        <AsideCard>
          <div className="flex flex-col space-y-1.5 p-6 pb-2 pt-4">
            <h3 className="text-md font-normal tracking-tight">Archives</h3>
          </div>
          <div className="flex flex-col space-y-1 px-4 p-6 pt-0">
            {sortByDate(archives, true).map((archive) => {
              return (
                <Link
                  key={archive}
                  href={`/archives/${archive}`}
                  className="items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs flex flex-row gap-2 w-full font-normal"
                >
                  <span className="text-sm flex-grow truncate">{archive}</span>
                  <span className="text-sm">{archives[archive]}</span>
                </Link>
              );
            })}
          </div>
        </AsideCard>

        {/* Tags Card */}
        <AsideCard>
          <div className="flex flex-col space-y-1.5 p-6 pb-2 pt-4">
            <h3 className="text-md font-normal tracking-tight">Tags</h3>
          </div>
          <div className="p-6 flex flex-row flex-wrap items-center pt-2 px-4">
            {sortByCount(tags, true)
              .slice(0, 10)
              .map((tag) => {
                return (
                  <Link
                    key={tag}
                    href={`/tag/${tag}`}
                    className="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-sm font-normal"
                  >
                    {tag}
                  </Link>
                );
              })}
          </div>
        </AsideCard>
      </div>
    </aside>
  );
}

export default MainLeftAside;
