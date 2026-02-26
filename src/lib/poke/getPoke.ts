import { POKE_API_ENDPOINT } from '@/constants/poke';
import type { GetFeaturedPokeReturnType, PokeType } from '@/types/poke';

export const getPoke = async (id: string): Promise<GetFeaturedPokeReturnType> => {
  try {
    const res = await fetch(`${POKE_API_ENDPOINT}/pokemon/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch poke (ID: ${id})`);
    }
    const data = (await res.json()) as PokeType;
    return {
      id: String(data.id).padStart(4, '0'),
      name: data.name,
      type: data.types.map(({ type }) => type.name),
      img: data.sprites.other['official-artwork'].front_default,
    };
  } catch (err) {
    console.error(err);
    throw err instanceof Error ? err : new Error('予期せぬエラーが発生しました');
  }
};
