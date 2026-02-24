import Image from 'next/image';
import { memo, Suspense } from 'react';
import Loading from '@/components/Loading';
import type { GetFeaturedPokeReturn } from '@/lib/getFeaturedPoke';
import { getFeaturedPoke } from '@/lib/getFeaturedPoke';

const FEATURED_POKEMON: { id: string }[] = [
  { id: '54' },
  { id: '133' },
  { id: '25' },
  { id: '151' },
  { id: '94' },
  { id: '6' },
  { id: '448' },
  { id: '778' },
  { id: '658' },
  { id: '149' },
];

const PokeGrid = memo(() => {
  return (
    <section className="space-y-8">
      <h3 className="text-center text-2xl font-bold text-gray-900">注目のポケモン</h3>
      <div className="flex justify-center items-center">
        <Suspense fallback={<Loading />}>
          <PokeGridContent />
        </Suspense>
      </div>
    </section>
  );
});

async function PokeGridContent() {
  const pokes: GetFeaturedPokeReturn[] = await Promise.all(
    FEATURED_POKEMON.map(({ id }) => getFeaturedPoke(id)),
  );

  if (!Array.isArray(pokes) || pokes.length === 0) {
    return <p className="text-gray-400 font-medium">注目のポケモンが見つかりませんでした。</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 w-full mx-16">
      {pokes.map(({ id, img, name, type }) => (
        <article
          key={id}
          className="relative flex flex-col items-center rounded-4xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <span className="absolute top-6 left-6 text-md font-black text-gray-400">#{id}</span>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="bg-slate-50 rounded-full p-12 flex justify-center items-center">
              <Image src={img} alt={name} width={200} height={200} />
            </div>
            <div className="space-y-2 text-center">
              <h4 className="text-xl font-bold capitalize text-gray-900">{name}</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {type.map((t) => (
                  <span
                    key={t}
                    className="bg-gray-100 rounded-full px-4 py-1 text-sm font-semibold uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default PokeGrid;
