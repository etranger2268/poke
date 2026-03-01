import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';

interface PaginationBeforeAndAfterProps {
  direction: 'previous' | 'next';
  url: string | undefined;
  currentPage: number;
  currentLimit: number;
}

const PaginationBeforeAndAfter = memo(
  ({ direction, url, currentPage, currentLimit }: PaginationBeforeAndAfterProps) => {
    const nextPage = direction === 'previous' ? currentPage - 1 : currentPage + 1;
    const Icon = direction === 'previous' ? <ArrowLeft /> : <ArrowRight />;

    if (!url) {
      return <span className="py-2 px-4 rounded-md bg-gray-500">{Icon}</span>;
    }

    return (
      <Link
        href={`/poke?page=${nextPage}&limit=${currentLimit}`}
        scroll={false}
        className="py-2 px-4 rounded-md bg-blue-500 transition-all duration-300 hover:opacity-75"
      >
        {Icon}
      </Link>
    );
  },
);

export default PaginationBeforeAndAfter;
