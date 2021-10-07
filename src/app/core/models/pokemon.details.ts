export interface PokemonDetails {
  name: string;
  species: { name: string; url: string };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default?: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
    other: {
      dream_world: {
        front_default?: string;
        front_female?: string;
      };
      'official-artwork': {
        front_default?: string;
      };
    };
  };
  types: {
    slot: 1;
    type: {
      name: string;
      url: string;
    };
  }[];
}
