import { createContext, useState } from "react";

const FavoritesContext = createContext ({
    favPokemons: [],
    totalFavorites: 0,
    addToFavorite: (favoritePokemon) => {},
    removeFromFavorites: (favPokemonId) => {},
    pokemonIsFavorite: (favPokemonId) => {}
});

export function FavCtxProvider(props) {
    const [userFavPokemons, setUserFavPokemons] = useState([])

    function addFavoriteHandler(favoritePokemon) {
        setUserFavPokemons(prevFavPokemon => {
            return prevFavPokemon.concat(favoritePokemon);
        });
    }
    function removeFavoriteHandler(favPokemonId) {
        setUserFavPokemons(prevFavPokemon => {
            return prevFavPokemon.filter(favorite => favorite.id !== favPokemonId);
        });
    }

    function isFavoriteHandler(favPokemonId) {
        return userFavPokemons.some(favorite => favorite.id === favPokemonId);
    }
    const context = {
        favorites: userFavPokemons,
        totalFavorites: userFavPokemons.length,
        addToFavorite: addFavoriteHandler,
        removeFromFavorite: removeFavoriteHandler,
        pokemonIsFavorite: isFavoriteHandler
    };


  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;