import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export interface PokemonList {
  count: number;
  next: String;
  previous: string;
  results: PokemonListItem[];
}
export type PokemonListItem = { name: string; url: string };
