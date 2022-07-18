export const searchForPokemon = async (pokemonName) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error", error);
  }
};
