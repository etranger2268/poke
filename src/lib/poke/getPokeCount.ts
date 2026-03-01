import { POKE_API_ENDPOINT } from '@/constants/poke';
import type { GetPokeCountArgsType, GetPokeCountReturnType, PokeCountType } from '@/types/poke';

export const getPokeCount = async ({
  limit,
}: GetPokeCountArgsType): Promise<GetPokeCountReturnType> => {
  try {
    const res = await fetch(`${POKE_API_ENDPOINT}/pokemon`);
    if (!res.ok) {
      throw new Error('Failed to fetch poke count');
    }
    const data = (await res.json()) as PokeCountType;
    const totalCount = Number(data.count);
    const pageCount = Math.ceil(totalCount / limit);
    return { totalCount, pageCount };
  } catch (err) {
    console.error(err);
    throw err instanceof Error ? err : new Error('予期せぬエラーが発生しました');
  }
};
