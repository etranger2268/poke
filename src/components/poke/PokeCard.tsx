import Image from 'next/image';
import { memo } from 'react';
import type { GetFeaturedPokeReturnType } from '@/types/poke';

interface PokeCardProps {
  poke: GetFeaturedPokeReturnType;
}

const PokeCard = memo(({ poke }: PokeCardProps) => {
  const { id, img, name, type } = poke;
  return (
    <article className="relative rounded-4xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <span className="absolute top-6 left-6 text-md font-black text-gray-400">#{id}</span>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="bg-slate-50 rounded-full p-12 flex justify-center items-center">
          <Image src={img} alt={name} width={200} height={200} />
        </div>
        <div className="space-y-2 text-center">
          <h4 className="text-xl font-bold capitalize text-gray-900">{name}</h4>
          <div className="flex justify-center gap-3">
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
  );
});

export default PokeCard;
