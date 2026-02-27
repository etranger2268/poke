export interface PokeType {
  id: number;
  name: string;
  types: { type: { name: string } }[];
  sprites: { other: { 'official-artwork': { front_default: string } } };
}

export interface GetPokeArgsType {
  id: string;
}

export interface GetPokeListArgsType {
  offset: number;
  limit: number;
}

export interface GetFeaturedPokeReturnType {
  id: string;
  name: string;
  type: string[];
  img: string;
}

export interface GetPokeListReturnType {
  next?: string;
  previous?: string;
  results: { url: string }[];
}
