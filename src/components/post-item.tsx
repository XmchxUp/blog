import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface PostItemProps {
  slug: string;
  title: string;
  category: string;
  date: string;
  description?: string;
  cover?: string;
}

function PostItem({
  title,
  slug,
  category,
  description,
  date,
  cover,
}: PostItemProps) {
  return (
    <div
      className="rounded-xl border bg-card text-card-foreground shadow "
      title={title}
    >
      {cover && (
        <Link href={"/" + slug}>
          <img
            src={cover}
            alt={title}
            width="100%"
            height="100%"
            className="rounded-t-md h-48 w-full object-cover"
          />
        </Link>
      )}
      <div className="flex flex-col space-y-1.5 p-6 pb-2">
        <Link href={"/" + slug}>
          <h3 className="text-2xl font-medium tracking-tight">{title}</h3>
        </Link>
        <p className="text-sm text-muted-foreground flex flex-row flex-nowrap gap-2">
          <time>{formatDate(date)}</time>
          <span> · </span>
          <a
            title={category}
            className="hover:underline"
            href={`/category/${category}`}
          >
            {category}
          </a>
        </p>
      </div>
      <div className="p-6 pt-0">
        <div className=" text-pretty hyphens-auto ">{description}</div>
      </div>
    </div>
  );
}

export default PostItem;
