import Link from "next/link";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

interface PostItemProps {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  description?: string;
  cover?: string;
}

function MainPostItem({
  title,
  slug,
  category,
  description,
  date,
  excerpt,
  cover,
}: PostItemProps) {
  return (
    <div
      className="print:rounded-none rounded-xl print:border-none border print:bg-transparent bg-card text-card-foreground print:shadow-none shadow"
      title={title}
    >
      {cover && (
        <Link href={"/" + slug}>
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "42.8571%",
            }}
          >
            <div className="position: absolute; inset: 0px;">
              <Image
                src={cover}
                alt={title}
                className="rounded-t-md h-48 w-full object-cover"
                fill={true}
                objectFit="cover"
              />
            </div>
          </div>
        </Link>
      )}
      <div className="flex flex-col space-y-1.5 p-6 pb-2">
        <Link href={"/" + slug}>
          <h3 className="text-2xl font-medium tracking-tight">{title}</h3>
        </Link>
        <p className="text-sm text-muted-foreground flex flex-row flex-nowrap gap-2">
          <time>{formatDate(date)}</time>
          <span> · </span>
          <Link
            title={category}
            className="hover:underline"
            href={`/category/${category}`}
          >
            {category}
          </Link>
        </p>
      </div>
      <div className="p-6 pt-0">
        <div className=" text-pretty hyphens-auto">
          {description ?? excerpt}
        </div>
      </div>
    </div>
  );
}

export default MainPostItem;
