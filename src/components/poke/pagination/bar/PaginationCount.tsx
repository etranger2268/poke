import { memo, Suspense } from 'react';
import { getPokeCount } from '@/lib/poke/getPokeCount';
import { getDisplayRange } from '@/lib/poke/pagination/getDisplayRange';

interface PaginationCountProps {
  page: number;
  limit: number;
}

const PaginationCount = memo(({ page, limit }: PaginationCountProps) => {
  const { start, end } = getDisplayRange(page, limit);
  return (
    <div className="flex justify-center items-center gap-2">
      <Suspense fallback={null}>
        <PaginationCountContent />
      </Suspense>
      <p>
        {start}件～{end}件
      </p>
    </div>
  );
});

async function PaginationCountContent() {
  const totalCount = await getPokeCount();
  return <p>{totalCount}件中</p>;
}

export default PaginationCount;
