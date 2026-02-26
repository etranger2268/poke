import { memo } from 'react';
import PokeCard from '@/components/poke/PokeCard';
import type { GetFeaturedPokeReturnType } from '@/types/poke';

interface PokeListProps {
  pokes: GetFeaturedPokeReturnType[];
}

const PokeList = memo(({ pokes }: PokeListProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-12">
      {pokes.map((poke) => (
        <PokeCard key={poke.id} poke={poke} />
      ))}
    </div>
  );
});

export default PokeList;
