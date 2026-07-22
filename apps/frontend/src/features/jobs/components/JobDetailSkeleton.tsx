const JobDetailSkeleton = (): JSX.Element => {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-(--radius-xl) border border-(--color-border) bg-(--color-surface) p-4 sm:p-6 md:p-8">
        <div className="flex animate-pulse flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="h-7 w-2/3 rounded-(--radius-sm) bg-(--color-border)" />
              <div className="h-5 w-16 shrink-0 rounded-full bg-(--color-border)" />
            </div>
            <div className="h-4 w-1/3 rounded-(--radius-sm) bg-(--color-border)" />
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <div className="h-5 w-16 rounded-full bg-(--color-border)" />
            <div className="h-5 w-20 rounded-full bg-(--color-border)" />
            <div className="h-5 w-14 rounded-full bg-(--color-border)" />
          </div>

          <hr className="border-(--color-border)" />

          {/* Description */}
          <div className="flex flex-col gap-2">
            <div className="h-4 w-28 rounded-(--radius-sm) bg-(--color-border)" />
            <div className="flex flex-col gap-1.5">
              <div className="h-3 w-full rounded-(--radius-sm) bg-(--color-border)" />
              <div className="h-3 w-full rounded-(--radius-sm) bg-(--color-border)" />
              <div className="h-3 w-2/3 rounded-(--radius-sm) bg-(--color-border)" />
            </div>
          </div>

          {/* Requirements */}
          <div className="flex flex-col gap-2">
            <div className="h-4 w-32 rounded-(--radius-sm) bg-(--color-border)" />
            <div className="flex flex-col gap-2">
              <div className="h-3 w-3/4 rounded-(--radius-sm) bg-(--color-border)" />
              <div className="h-3 w-2/3 rounded-(--radius-sm) bg-(--color-border)" />
              <div className="h-3 w-1/2 rounded-(--radius-sm) bg-(--color-border)" />
            </div>
          </div>

          <hr className="border-(--color-border)" />

          {/* Application form */}
          <div className="flex flex-col gap-4">
            <div className="h-4 w-48 rounded-(--radius-sm) bg-(--color-border)" />
            <div className="h-16 rounded-(--radius-md) bg-(--color-border)" />
            <div className="h-24 rounded-(--radius-md) bg-(--color-border)" />
            <div className="h-10 rounded-(--radius-md) bg-(--color-border)" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailSkeleton;
