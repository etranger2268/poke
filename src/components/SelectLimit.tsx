'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { memo } from 'react';
import { INITIAL_LIMIT, INITIAL_PAGE, LIMITS } from '@/constants/poke';

const SelectLimit = memo(() => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedLimit = searchParams.get('limit') ?? INITIAL_LIMIT;

  const handleClickLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(INITIAL_PAGE));
    params.set('limit', value);
    router.push(`/poke?${params.toString()}`);
  };

  return (
    <div className="flex justify-center items-center gap-6 text-xl font-semibold">
      <label htmlFor="limit-select">表示件数</label>
      <select
        name="limit"
        id="limit-select"
        className="appearance-none bg-white py-2 px-4 rounded-md border border-gray-200 cursor-pointer transition-all duration-300 focus:outline-none focus:ring focus:ring-blue-500"
        onChange={handleClickLimit}
        value={selectedLimit}
      >
        {LIMITS.map((limit) => (
          <option key={limit} value={limit}>
            {limit}件
          </option>
        ))}
      </select>
    </div>
  );
});

export default SelectLimit;
