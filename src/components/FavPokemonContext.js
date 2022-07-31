import { createContext } from  'react';

const FavPokemonContext = createContext({
    favPokemons: [],
    updateFavPokemons: (id) => null
})

export const FavoriteProvider = FavPokemonContext.Provider

export default FavPokemonContext;