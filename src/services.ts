interface IPokemon {
  id: number;
  name: string;
  movements: string[];
  types: string[];
}

const PokemonList: IPokemon[] = [];

async function getPokemons(): Promise<IPokemon[]> {
  const randomTimeout = Math.floor(Math.random() * 1000);
  await new Promise((resolve) => setTimeout(resolve, randomTimeout));

  return Promise.resolve(PokemonList);
}

async function createPokemon(pokemon: IPokemon): Promise<void> {
  const randomTimeout = Math.floor(Math.random() * 1000);
  await new Promise((resolve) => setTimeout(resolve, randomTimeout));
  
  if (PokemonList.find((p) => p.id === pokemon.id)) {
    return Promise.reject(new Error('Pokemon already exists'));
  }
  PokemonList.push(pokemon);
  return Promise.resolve();
}

async function deletePokemon(id: number): Promise<void> {
  const randomTimeout = Math.floor(Math.random() * 1000);
  await new Promise((resolve) => setTimeout(resolve, randomTimeout));

  const index = PokemonList.findIndex((pokemon) => pokemon.id === id);
  if (index === -1) {
    return Promise.reject(new Error('Pokemon not found'));
  }
  PokemonList.splice(index, 1);
  return Promise.resolve();
}

function init() {
  createPokemon({
    id: 1,
    name: 'Bulbasaur',
    movements: ['tackle', 'growl', 'leech seed', 'vine whip'],
    types: ['grass', 'poison'],
  });
  createPokemon({
    id: 2,
    name: 'Charmander',
    movements: ['scratch', 'growl', 'ember', 'smokescreen'],
    types: ['fire'],
  });
  createPokemon({
    id: 3,
    name: 'Squirtle',
    movements: ['tackle', 'tail whip', 'water gun', 'withdraw'],
    types: ['water'],
  });
}

init()

export {
  getPokemons,
  createPokemon,
  deletePokemon,
}

export type {
  IPokemon
}
