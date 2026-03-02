import { memo, Suspense } from 'react';
import Loading from '@/components/Loading';
import PaginationBarList from '@/components/poke/pagination/bar/PaginationBarList';
import PaginationBeforeAndAfter from '@/components/poke/pagination/bar/PaginationBeforeAndAfter';
import PaginationCount from '@/components/poke/pagination/bar/PaginationCount';

interface PaginationBarProps {
  currentPage: number;
  currentLimit: number;
  next: string | undefined;
  previous: string | undefined;
}

const PaginationBar = memo(({ currentPage, currentLimit, next, previous }: PaginationBarProps) => {
  return (
    <div className="text-2xl font-semibold space-y-6">
      <div className="flex justify-center items-center gap-2 text-lg font-medium text-white">
        <PaginationBeforeAndAfter
          direction="previous"
          url={previous}
          currentPage={currentPage}
          currentLimit={currentLimit}
        />
        <Suspense fallback={<Loading />}>
          <PaginationBarList currentPage={currentPage} currentLimit={currentLimit} />
        </Suspense>
        <PaginationBeforeAndAfter
          direction="next"
          url={next}
          currentPage={currentPage}
          currentLimit={currentLimit}
        />
      </div>
      <PaginationCount page={currentPage} limit={currentLimit} />
    </div>
  );
});

export default PaginationBar;
