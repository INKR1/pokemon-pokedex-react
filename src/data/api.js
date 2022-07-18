export const searchForPokemon = async (pokemonName) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error", error);
  }
};

export const getPokemons = async (limit = 50, ofset = 0) => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${ofset}`;
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log("error", error);
    }
  };
