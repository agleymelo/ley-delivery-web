import { Skeleton } from "~/components/ui/skeleton";

export function SkeletonProductsCart() {
  return (
    <>
      <div className="rounded-sm border">
        <Skeleton className="h-36 w-full rounded-t-sm" />

        <div className="flex flex-col items-start justify-start gap-2 p-4">
          <Skeleton className="h-6 w-full rounded-t-sm" />

          <Skeleton className="h-6 w-full rounded-t-sm" />
        </div>
        <div className="flex items-center gap-4  p-4 md:flex-row md:justify-between">
          <Skeleton className="h-6 w-20 rounded-t-sm" />

          <Skeleton className="h-10 w-full rounded-t-sm" />
        </div>
      </div>
    </>
  );
}
