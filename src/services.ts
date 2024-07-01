interface IPokemon {
  id: number;
  name: string;
  movements: string[];
  types: string[];
}

const PokemonList: IPokemon[] = [];

async function getPokemons(): Promise<IPokemon[]> {
  return Promise.resolve(PokemonList);
}

async function createPokemon(pokemon: IPokemon): Promise<void> {
  if (PokemonList.find((p) => p.id === pokemon.id)) {
    return Promise.reject(new Error('Pokemon already exists'));
  }
  PokemonList.push(pokemon);
  return Promise.resolve();
}

async function deletePokemon(id: number): Promise<void> {
  const index = PokemonList.findIndex((pokemon) => pokemon.id === id);
  if (index === -1) {
    return Promise.reject(new Error('Pokemon not found'));
  }
  PokemonList.splice(index, 1);
  return Promise.resolve();
}

export {
  getPokemons,
  createPokemon,
  deletePokemon,
}
