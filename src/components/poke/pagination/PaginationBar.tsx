import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { getDisplayRange } from '@/lib/poke/getDisplayRange';
import { getPokeCount } from '@/lib/poke/getPokeCount';

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
  const digits = String(pageCount).length;
  const pageLink = Array.from({ length: pageCount }, (_, idx) => idx + 1);
  const { start, end } = getDisplayRange(currentPage, currentLimit);

  return (
    <div className="text-2xl font-semibold space-y-6">
      <div className="flex justify-center items-center gap-2 text-lg font-medium text-white">
        {previous ? (
          <Link
            href={`/poke?page=${currentPage - 1}&limit=${currentLimit}`}
            scroll={false}
            className="py-2 px-4 rounded-md bg-blue-500 transition-all duration-300 hover:opacity-75"
          >
            <ArrowLeft />
          </Link>
        ) : (
          <span className="py-2 px-4 rounded-md bg-gray-500">
            <ArrowLeft />
          </span>
        )}
        <div className="flex gap-1">
          {pageLink.map((pageNumber) =>
            pageNumber === currentPage ? (
              <span
                key={pageNumber}
                className="py-2 px-4 rounded-md bg-blue-500 transition-all duration-300 cursor-not"
              >
                {String(pageNumber).padStart(digits, '0')}
              </span>
            ) : (
              <Link
                key={pageNumber}
                href={`/poke?page=${pageNumber}&limit=${currentLimit}`}
                className="py-2 px-4 rounded-md text-gray-900 border border-gray-200 bg-gray-100 transition-all duration-300 hover:opacity-75"
              >
                {String(pageNumber).padStart(digits, '0')}
              </Link>
            ),
          )}
        </div>
        )
        {next ? (
          <Link
            href={`/poke?page=${currentPage + 1}&limit=${currentLimit}`}
            scroll={false}
            className="py-2 px-4 rounded-md bg-blue-500 transition-all duration-300 hover:opacity-75"
          >
            <ArrowRight />
          </Link>
        ) : (
          <span className="py-2 px-4 rounded-md bg-gray-500">
            <ArrowRight />
          </span>
        )}
      </div>
      <div className="flex justify-center items-center gap-2">
        <p>{totalCount}件中</p>
        <p>
          {start}件～{end}件
        </p>
      </div>
    </div>
  );
}

export default PaginationBar;
