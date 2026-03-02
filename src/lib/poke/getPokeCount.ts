import { POKE_API_ENDPOINT } from '@/constants/poke';
import type { PokeCountType } from '@/types/poke';

export const getPokeCount = async (): Promise<number> => {
  try {
    const res = await fetch(`${POKE_API_ENDPOINT}/pokemon`);
    if (!res.ok) {
      throw new Error('Failed to fetch poke count');
    }
    const data = (await res.json()) as PokeCountType;
    return Number(data.count);
  } catch (err) {
    console.error(err);
    throw err instanceof Error ? err : new Error('予期せぬエラーが発生しました');
  }
};
