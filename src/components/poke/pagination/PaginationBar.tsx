import { memo } from 'react';
import PaginationBeforeAndAfter from '@/components/poke/pagination/PaginationBeforeAndAfter';
import PaginationCount from '@/components/poke/pagination/PaginationCount';
import PaginationLink from '@/components/poke/pagination/PaginationLink';
import { getPokeCount } from '@/lib/poke/getPokeCount';
import { getVisiblePage } from '@/lib/poke/pagination/getVisiblePage';

interface PaginationBarProps {
  currentPage: number;
  currentLimit: number;
  next: string | undefined;
  previous: string | undefined;
}

const PaginationBar = memo(({ currentPage, currentLimit, next, previous }: PaginationBarProps) => {
  return (
    <PaginationBarContent
      currentPage={currentPage}
      currentLimit={currentLimit}
      next={next}
      previous={previous}
    />
  );
});

async function PaginationBarContent({
  currentPage,
  currentLimit,
  next,
  previous,
}: PaginationBarProps) {
  const { totalCount, pageCount } = await getPokeCount({ limit: currentLimit });
  const pageLink = Array.from({ length: pageCount }, (_, idx) => idx + 1);
  const visiblePageLink = getVisiblePage(currentPage, pageLink);

  const digits = String(pageCount).length;

  return (
    <div className="text-2xl font-semibold space-y-6">
      <div className="flex justify-center items-center gap-2 text-lg font-medium text-white">
        <PaginationBeforeAndAfter
          direction="previous"
          url={previous}
          currentPage={currentPage}
          currentLimit={currentLimit}
        />
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
        )
        <PaginationBeforeAndAfter
          direction="next"
          url={next}
          currentPage={currentPage}
          currentLimit={currentLimit}
        />
      </div>
      <PaginationCount totalCount={totalCount} page={currentPage} limit={currentLimit} />
    </div>
  );
}

export default PaginationBar;
