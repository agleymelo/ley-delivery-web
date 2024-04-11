import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

type PaginationProps = {
  pageIndex: number;
  totalCount: number;
  perPage: number;
  prevPage: number;
  nextPage: number;
};

export function Pagination({
  pageIndex,
  totalCount,
  perPage,
  prevPage,
  nextPage,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1;


  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} de item(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {pageIndex + 1} de {pages}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={pageIndex === 0}
          >
            <Link href="?page=1">
              <ChevronsLeft className="h-4 w-4" />
              <span className="sr-only">Primeira página</span>
            </Link>
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={pageIndex === 0}
          >
            <Link href={`?page=${prevPage}`}>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Página anterior</span>
            </Link>
          </Button>

          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={pages < pageIndex || pages === pageIndex + 1}
          >
            <Link href={`?page=${nextPage}`}>
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Próxima página</span>
            </Link>
          </Button>

          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={pageIndex < pageIndex || pages === pageIndex + 1}
          >
            <Link href={`?page=${pages}`}>
              <ChevronsRight className="h-4 w-4" />
              <span className="sr-only">Última página</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
