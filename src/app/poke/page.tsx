import Link from 'next/link';
import { Suspense } from 'react';
import Loading from '@/components/Loading';
import PokeList from '@/components/poke/PokeList';
import { LIMIT } from '@/constants/poke';
import { getPoke } from '@/lib/poke/getPoke';
import { getPokeList } from '@/lib/poke/getPokeList';

interface PokePageProps {
  searchParams: Promise<{ page?: number }>;
}

export default async function PokePage({ searchParams }: PokePageProps) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;

  return (
    <section className="my-18 space-y-18">
      <h2 className="text-center text-3xl text-gray-900 font-bold">ポケモン</h2>
      <div className="flex justify-center items-center">
        <Suspense key={currentPage} fallback={<Loading />}>
          <PokePageContent searchParams={searchParams} />
        </Suspense>
      </div>
    </section>
  );
}

async function PokePageContent({ searchParams }: PokePageProps) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const offset = (currentPage - 1) * LIMIT;

  const { next, previous, results } = await getPokeList(offset);

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
              href={`/poke?page=${currentPage - 1}`}
              scroll={false}
              className="py-2 px-4 rounded-md bg-blue-500 transition-all duration-300 hover:opacity-75"
            >
              前の{LIMIT}件
            </Link>
          ) : (
            <span className="py-2 px-4 rounded-md bg-gray-500 cursor-not-allowed">
              前の{LIMIT}件
            </span>
          )}
          {next ? (
            <Link
              href={`/poke?page=${currentPage + 1}`}
              scroll={false}
              className="py-2 px-4 rounded-md bg-blue-500 transition-all duration-300 hover:opacity-75"
            >
              次の{LIMIT}件
            </Link>
          ) : (
            <span className="py-2 px-4 rounded-md bg-gray-500 cursor-not-allowed">
              次の{LIMIT}件
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
