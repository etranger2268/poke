import { memo } from 'react';
import { getDisplayRange } from '@/lib/poke/pagination/getDisplayRange';

interface PaginationCountProps {
  totalCount: number;
  page: number;
  limit: number;
}

const PaginationCount = memo(({ totalCount, page, limit }: PaginationCountProps) => {
  const { start, end } = getDisplayRange(page, limit);
  return (
    <div className="flex justify-center items-center gap-2">
      <p>{totalCount}件中</p>
      <p>
        {start}件～{end}件
      </p>
    </div>
  );
});

export default PaginationCount;
