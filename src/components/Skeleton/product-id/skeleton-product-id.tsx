import { Skeleton } from "~/components/ui/skeleton";

export function SkeletonProductId() {
  return (
    <div className="my-8 flex h-full flex-col p-4 md:grid md:grid-cols-2 md:gap-8">
      <Skeleton className="h-40 w-full md:h-80" />

      <main className="mt-4 flex flex-col gap-4">
        <div>
          <Skeleton className="h-9 w-full" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <Skeleton className="h-9 w-full" />
          </div>

          <div className="mt-4 flex items-center gap-4">
            <Skeleton className="h-9 w-full" />
          </div>

          <div className="mt-4">
            <Skeleton className="h-9 w-full" />
          </div>
        </div>
      </main>
    </div>
  );
}
