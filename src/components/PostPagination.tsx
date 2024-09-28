"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";

interface CustomPaginationProps {
  totalPages: number;
  className?: string;
}

export function CustomPagination({
  totalPages,
  className,
}: CustomPaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const canGoBack = currentPage > 1;
  const canGoForward = currentPage < totalPages;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  // disabled: https://github.com/shadcn-ui/ui/discussions/2149

  const renderEllipsisBefore = currentPage > 3;
  const renderEllipsisAfter = currentPage <= totalPages - 3;

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={!canGoBack}
            className={
              !canGoBack ? "pointer-events-none opacity-50" : undefined
            }
            href={createPageURL(prevPage)}
          />
        </PaginationItem>

        {/* first page */}
        <PaginationItem>
          <PaginationLink isActive={currentPage === 1} href={createPageURL(1)}>
            1
          </PaginationLink>
        </PaginationItem>

        {renderEllipsisBefore && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* pages around the current page  */}
        {Array(totalPages)
          .fill("")
          .map((_, index) => {
            const page = index + 1;

            if (
              page === 1 ||
              page === totalPages ||
              page < currentPage - 1 ||
              page > currentPage + 1
            ) {
              return null;
            }

            return (
              <PaginationItem key={`pagination-item-${index}`}>
                <PaginationLink
                  isActive={currentPage === page}
                  href={createPageURL(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

        {renderEllipsisAfter && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* last page */}
        <PaginationItem>
          <PaginationLink
            isActive={currentPage === totalPages}
            href={createPageURL(totalPages)}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            aria-disabled={!canGoForward}
            className={
              !canGoForward ? "pointer-events-none opacity-50" : undefined
            }
            href={createPageURL(nextPage)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
