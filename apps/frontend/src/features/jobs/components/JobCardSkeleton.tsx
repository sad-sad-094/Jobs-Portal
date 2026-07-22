import Card from '../../../components/ui/Card';

const JobCardSkeleton = (): JSX.Element => {
  return (
    <Card>
      <div className="flex animate-pulse flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-1 flex-col gap-2">
            <div className="h-4 w-3/4 rounded-(--radius-sm) bg-(--color-border)" />
            <div className="h-3 w-1/2 rounded-(--radius-sm) bg-(--color-border)" />
          </div>
          <div className="h-5 w-16 rounded-full bg-(--color-border)" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="h-3 w-full rounded-(--radius-sm) bg-(--color-border)" />
          <div className="h-3 w-2/3 rounded-(--radius-sm) bg-(--color-border)" />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="h-5 w-16 rounded-full bg-(--color-border)" />
          <div className="h-5 w-20 rounded-full bg-(--color-border)" />
          <div className="h-5 w-14 rounded-full bg-(--color-border)" />
        </div>
      </div>
    </Card>
  );
};

export default JobCardSkeleton;
