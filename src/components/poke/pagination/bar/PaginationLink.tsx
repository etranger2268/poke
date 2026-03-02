import { Ellipsis } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';

interface PaginationLinkProp {
  keyProps: string;
  type: 'page' | 'ellipsis';
  pageNumber: number | '...';
  currentPage: number;
  currentLimit: number;
  digits: number;
}

const PaginationLink = memo(
  ({ keyProps, type, pageNumber, currentPage, currentLimit, digits }: PaginationLinkProp) => {
    if (pageNumber === currentPage) {
      return (
        <span key={keyProps} className="py-2 px-4 rounded-md bg-blue-500">
          {String(pageNumber).padStart(digits, '0')}
        </span>
      );
    }

    if (type === 'ellipsis') {
      return (
        <span className="text-gray-900 py-2 px-4 rounded-md">
          <Ellipsis />
        </span>
      );
    }

    return (
      <Link
        key={keyProps}
        href={`/poke?page=${pageNumber}&limit=${currentLimit}`}
        className="py-2 px-4 rounded-md text-gray-900 border border-gray-200 bg-gray-100 transition-all duration-300 hover:bg-gray-200"
      >
        {String(pageNumber).padStart(digits, '0')}
      </Link>
    );
  },
);

export default PaginationLink;
