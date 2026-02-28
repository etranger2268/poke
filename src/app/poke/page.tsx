import Link from 'next/link';
import { Suspense } from 'react';
import Loading from '@/components/Loading';
import PokeList from '@/components/poke/PokeList';
import SelectLimit from '@/components/SelectLimit';
import { INITIAL_LIMIT, INITIAL_PAGE } from '@/constants/poke';
import { getPoke } from '@/lib/poke/getPoke';
import { getPokeList } from '@/lib/poke/getPokeList';

interface PokePageProps {
  searchParams: Promise<{ page?: string; limit?: string }>;
}

export default async function PokePage({ searchParams }: PokePageProps) {
  const { page, limit } = await searchParams;
  const currentPage = page !== undefined ? Number(page) : INITIAL_PAGE;
  const currentLimit = limit !== undefined ? Number(limit) : INITIAL_LIMIT;

  return (
    <section className="my-18 space-y-18">
      <h2 className="text-center text-3xl text-gray-900 font-bold">ポケモン</h2>
      <SelectLimit selectedLimit={currentLimit} />
      <div className="flex justify-center items-center">
        <Suspense key={`page=${currentPage}&limit=${currentLimit}`} fallback={<Loading />}>
          <PokePageContent currentPage={currentPage} currentLimit={currentLimit} />
        </Suspense>
      </div>
    </section>
  );
}

interface PokePageContentProps {
  currentPage: number;
  currentLimit: number;
}

async function PokePageContent({ currentPage, currentLimit }: PokePageContentProps) {
  const offset = (currentPage - 1) * currentLimit;

  const { next, previous, results } = await getPokeList({ offset, limit: currentLimit });

  const pokes = await Promise.all(
    results.map(({ url }) => {
      const id = url.split('/').filter(Boolean).at(-1);
      if (!id) {
        throw new Error(`Invalid URL: ${id}`);
      }
      return getPoke(id);
    }),
  );

  return (
    <div className="space-y-12">
      <PokeList pokes={pokes} />
      <div className="text-2xl font-semibold">
        <div className="flex justify-center items-center gap-32 text-lg font-medium text-white">
          {previous ? (
            <Link
              href={`/poke?page=${currentPage - 1}&limit=${currentLimit}`}
              scroll={false}
              className="py-2 px-4 rounded-md bg-blue-500 transition-all duration-300 hover:opacity-75"
            >
              前の{currentLimit}件
            </Link>
          ) : (
            <span className="py-2 px-4 rounded-md bg-gray-500 cursor-not-allowed">
              前の{currentLimit}件
            </span>
          )}
          {next ? (
            <Link
              href={`/poke?page=${currentPage + 1}&limit=${currentLimit}`}
              scroll={false}
              className="py-2 px-4 rounded-md bg-blue-500 transition-all duration-300 hover:opacity-75"
            >
              次の{currentLimit}件
            </Link>
          ) : (
            <span className="py-2 px-4 rounded-md bg-gray-500 cursor-not-allowed">
              次の{currentLimit}件
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
