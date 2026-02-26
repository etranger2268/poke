import { memo, Suspense } from 'react';
import Loading from '@/components/Loading';
import PokeList from '@/components/poke/PokeList';
import { FEATURED_POKEMON } from '@/constants/poke';
import { getPoke } from '@/lib/poke/getPoke';
import type { GetFeaturedPokeReturnType } from '@/types/poke';

const FeaturedPoke = memo(() => {
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
  const pokes: GetFeaturedPokeReturnType[] = await Promise.all(
    FEATURED_POKEMON.map(({ id }) => getPoke(id)),
  );

  if (!Array.isArray(pokes) || pokes.length === 0) {
    return <p className="text-gray-400 font-medium">注目のポケモンが見つかりませんでした。</p>;
  }

  return <PokeList pokes={pokes} />;
}

export default FeaturedPoke;
