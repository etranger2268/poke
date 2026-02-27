import { POKE_API_ENDPOINT } from '@/constants/poke';
import type { GetPokeListArgsType, GetPokeListReturnType } from '@/types/poke';

export const getPokeList = async ({
  offset,
  limit,
}: GetPokeListArgsType): Promise<GetPokeListReturnType> => {
  try {
    const res = await fetch(`${POKE_API_ENDPOINT}/pokemon?offset=${offset}&limit=${limit}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch poke`);
    }

    return res.json();
  } catch (err) {
    console.error(err);
    throw err instanceof Error ? err : new Error('予期せぬエラーが発生しました');
  }
};
