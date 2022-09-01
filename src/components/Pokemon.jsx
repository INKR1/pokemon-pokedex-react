import { useContext } from "react";

import Card from "../components/ui/Card"
import FavoritesContext from "../contexts/favPokemonContext";

export default function Pokemon({ pokemon }) {
  
  const favCtx = useContext(FavoritesContext);

  const pokemonIsFav = favCtx.pokemonIsFavorite(pokemon.id);

  function toggleFavStatus() {
    if (pokemonIsFav) {
      favCtx.removeFromFavorites(pokemon.id);
    } else {
      favCtx.addToFavorite({
        id: pokemon.id,
        name: pokemon.name,
        type: pokemon.type,
        img: pokemon.sprites.front_default
      });
    }
  }
  
  return (
    <div className="pokemon-card">
      <Card> 
        <div className="pokemon-img-container">
          <img
            alt={pokemon.name}
            src={pokemon.sprites.front_default}
            className="pokemon-img"
          />
        </div>
        <div className="card-body">
          <div className="card-top">
            <h3>{pokemon.name}</h3>
            <div># {pokemon.id} </div>
          </div>
          <div className="card-bottom">
            <div className="pokemon-type">
              {pokemon.types.map((type, index) => {
                return (
                  <div className="pokemon-type-item" key={index}>
                    {type.type.name}
                  </div>
                );
              })}
            </div>
            <svg
              className="pokeball"
              onClick={toggleFavStatus}
            >
              <use xlinkHref={pokemonIsFav ? "#likedPokeball" : "#pokeball"}></use>
            </svg>
          </div>
        </div>
      </Card>
    </div>
  );
}
