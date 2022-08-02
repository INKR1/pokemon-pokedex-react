import { createContext, useState } from  'react';

const FavPokemonContext = createContext({
    favPokemons: [],
    totalFavPokemons: 0,
    addFavPokemon: (favoritePokemon) => { },
    removeFavPokemon: (favPokemonId) => { },
    pokemonIsFavorite: (favPokemonId) => { }
});

export function FavPokemonsProvider(props){

    const [favPokemons, setFavPokemons] = useState([]);

    function addFavPokemonHandler(favoritePokemon) {
        setFavPokemons(prevFav => {
            return prevFav.concat(favoritePokemon);
        });
    }

    function removeFavPokemonHandler(favPokemonId) {
        setFavPokemons(prevFavPokemon => {
            return prevFavPokemon.filter(favorite => favorite.id !== favPokemonId);
        });
    }
    function isFavoriteHandler(favPokemonId) {
        return favPokemons.some(p => p.id === favPokemonId);
    }
    const context = {
        favPokemons: favPokemons,
        totalFavPokemons: favPokemons.length,
        addFavPokemon: addFavPokemonHandler,
        removeFavPokemon: removeFavPokemonHandler,
        pokemonIsFavorite: isFavoriteHandler
    };

    return (
        <FavPokemonContext.Provider value={context}>
            {props.children}
        </FavPokemonContext.Provider>
    )

}

export default FavPokemonContext;