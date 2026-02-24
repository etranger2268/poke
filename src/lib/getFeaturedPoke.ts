interface FeaturedPoke {
  id: number;
  name: string;
  types: { type: { name: string } }[];
  sprites: { other: { 'official-artwork': { front_default: string } } };
}

export interface GetFeaturedPokeReturn {
  id: string;
  name: string;
  type: string[];
  img: string;
}

export const getFeaturedPoke = async (id: string): Promise<GetFeaturedPokeReturn> => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch poke (ID: ${id})`);
    }
    const data = (await res.json()) as FeaturedPoke;
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
