export interface Pokemons {
  name: string;
  url: string;
}

export interface Pokemon {
  sprites: {
    front_default: string;
  };
  types?: PokemonType[];
}

interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
// prettier-ignore
export const typeColors = {
  'normal': 'bg-gray-500 text-base rounded-full text-neutral-200 px-2',
  'fire': 'bg-red-600 text-base rounded-full text-neutral-200 px-2',
  'water': 'bg-blue-500 text-base rounded-full text-neutral-200 px-2',
  'grass': 'bg-green-500 text-base rounded-full text-neutral-200 px-2',
  'flying': 'bg-sky-300 text-base rounded-full text-neutral-200 px-2',
  'fighting': 'bg-amber-950 text-base rounded-full text-neutral-200 px-2',
  'poison': 'bg-indigo-600 text-base rounded-full text-neutral-200 px-2',
  'electric': 'bg-yellow-400 text-base rounded-full text-neutral-200 px-2',
  'ground': 'bg-amber-800 text-base rounded-full text-neutral-200 px-2',
  'rock': 'bg-zinc-800 text-base rounded-full text-neutral-200 px-2',
  'psychic': 'bg-fuchsia-500 text-base rounded-full text-neutral-200 px-2',
  'ice': 'bg-sky-700 text-base rounded-full text-neutral-200 px-2',
  'bug': 'bg-lime-500 text-base rounded-full text-neutral-200 px-2',
  'ghost': 'bg-indigo-950 text-base rounded-full text-neutral-200 px-2',
  'steel': 'bg-slate-500 text-base rounded-full text-neutral-200 px-2',
  'dragon': 'bg-blue-600 text-base rounded-full text-neutral-200 px-2',
  'dark': 'bg-neutral-950 text-base rounded-full text-neutral-200 px-2',
  'fairy': 'bg-pink-500 text-base rounded-full text-neutral-200 px-2'
};
