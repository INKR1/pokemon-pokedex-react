import { createContext } from "react";

const favoritesPokemon = createContext({
    favoritePokemons: [],
    updateFavoritePokemons: (id) => null
})

export const FavoriteProvider = favoritesPokemon.Provider

export default favoritesPokemon;