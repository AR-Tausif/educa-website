import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-1 p-5">
      <Skeleton className="h-2 w-full rounded-xl" />
      <div className="-space-y-1">
        <Skeleton className="h-2 w-[50px]" />
        <Skeleton className="h-2 w-[20px]" />
      </div>
    </div>
  )
}
