import { SkeletonGrid } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="container-page section-py">
      <div className="mb-8 h-8 w-64 animate-pulse rounded-sm bg-offwhite" aria-hidden="true" />
      <SkeletonGrid count={8} />
    </div>
  );
}
