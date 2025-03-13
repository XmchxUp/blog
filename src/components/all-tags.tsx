import Link from "next/link";
import AsideCard from "./aside-card";

interface PostsByYearProp {
  title: string;
  items: Array<String>;
}

function AllAnything({ title, items: posts }: PostsByYearProp) {
  return (
    <div className="space-y-8">
      <AsideCard>
        <div className="flex flex-col space-y-1.5 p-6">
          <h1 className="text-2xl font-medium tracking-tight">{title}</h1>
          <p className="text-muted-foreground text-sm">
            Total {posts.length} {title}.
          </p>
        </div>
      </AsideCard>
      <div className="space-y-8">
        <div className="space-y-4 mx-1">
          <h2 className="text-xl font-medium ml-2">All</h2>
          {posts.map((post) => {
            return (
              <div className="flex flex-col gap-2" key={`${title}-${post}`}>
                <div className="print:rounded-none rounded-xl print:border-none border print:bg-transparent bg-card text-card-foreground print:shadow-none shadow flex flex-row items-center justify-between">
                  <div className="space-y-1 inline-flex flex-col h-full p-6 content-start pr-4 w-[calc(100%-128px)]">
                    <Link href={`${title.toLowerCase()}/${post}`}>
                      <h3 className="font-semibold tracking-tight text-base truncate">
                        {post}
                      </h3>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllAnything;
