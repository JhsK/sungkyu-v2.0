import { IPagination } from "@/types/common";
import Link from "next/link";

interface IPaginationProps extends IPagination {
  url: string;
  align?: "left" | "center" | "right";
}

const alignStyle = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

function Pagination({
  currentPage,
  size,
  totalCount,
  url,
  align = "center",
}: IPaginationProps) {
  const allPage = Math.ceil(totalCount / size);

  return (
    <div className={`w-full flex ${alignStyle[align]}`}>
      <div className="flex gap-3">
        {Array.from({ length: allPage }, (_, i) => i + 1).map((page) => (
          <Link
            href={`${url}?page=${page}`}
            key={page}
            className="border border-zinc-200 h-10 px-3.5 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-zinc-100 data-[state=on]:text-zinc-900 dark:ring-offset-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-300 dark:data-[state=on]:bg-zinc-800 dark:data-[state=on]:text-zinc-50 dark:border-zinc-800"
          >
            {page}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
