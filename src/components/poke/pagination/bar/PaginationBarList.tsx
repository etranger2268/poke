import { Suspense } from 'react';
import Loading from '@/components/Loading';
import PaginationLink from '@/components/poke/pagination/bar/PaginationLink';
import { getPokeCount } from '@/lib/poke/getPokeCount';
import { getPageCount } from '@/lib/poke/pagination/getPageCount';
import { getVisiblePage } from '@/lib/poke/pagination/getVisiblePage';

interface PaginationBarListProps {
  currentPage: number;
  currentLimit: number;
}

const PaginationBarList = ({ currentPage, currentLimit }: PaginationBarListProps) => {
  return (
    <Suspense fallback={<Loading />}>
      <PaginationBarListContent currentPage={currentPage} currentLimit={currentLimit} />
    </Suspense>
  );
};

async function PaginationBarListContent({ currentPage, currentLimit }: PaginationBarListProps) {
  const totalCount = await getPokeCount();
  const pageCount = getPageCount(totalCount, currentLimit);
  const pageLink = Array.from({ length: pageCount }, (_, idx) => idx + 1);
  const visiblePageLink = getVisiblePage(currentPage, pageLink);
  const digits = String(pageCount).length;

  return (
    <div className="flex gap-1 items-center">
      {visiblePageLink.map(({ type, pageNumber, key }) => (
        <PaginationLink
          key={key}
          keyProps={key}
          type={type}
          pageNumber={pageNumber}
          currentPage={currentPage}
          currentLimit={currentLimit}
          digits={digits}
        />
      ))}
    </div>
  );
}

export default PaginationBarList;
