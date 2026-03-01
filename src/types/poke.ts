export interface PokeType {
  id: number;
  name: string;
  types: { type: { name: string } }[];
  sprites: { other: { 'official-artwork': { front_default: string } } };
}

export interface PokeCountType {
  count: number;
}

export interface GetPokeArgsType {
  id: string;
}

export interface GetPokeListArgsType {
  offset: number;
  limit: number;
}

export interface GetPokeCountArgsType {
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

export interface GetPokeCountReturnType {
  totalCount: number;
  pageCount: number;
}
