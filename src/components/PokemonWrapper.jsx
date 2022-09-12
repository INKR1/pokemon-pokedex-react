import { useContext } from "react";
import FavoritesContext from "../contexts/favPokemonContext";
import SearchBar from "../pages/Searchbar"

export default function PokemonWrapper({ pokemon }) {
  const favCtx = useContext(FavoritesContext);

  const pokemonIsFav = favCtx.pokemonIsFavorite(pokemon.id);

  function toggleFavStatus() {
    if (pokemonIsFav) {
      favCtx.removeFromFavorites(pokemon.id);
    } else {
      favCtx.addToFavorites(pokemon);
    }
  }
  // console.log("pav: " + pokemon.img)
  // console.log(pokemonIsFav)

  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-img"
        />
      </div>
      <div>
        <img
          src={pokemon.sprites.front_shiny}
          alt={pokemon.name}
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
            <div className="pokemon-type-item">{/* {(pokemon.types)} */}</div>

            {pokemon.types.map((type, id) => {
              return (
                <div className="pokemon-type-item" key={id}>
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <svg className="pokeball" onClick={toggleFavStatus}>
            <use
              xlinkHref={pokemonIsFav ? "#likedPokeball" : "#pokeball"}
            ></use>
          </svg>
        </div>
      </div>
      <SearchBar toggleFavorites={toggleFavStatus} pokemonIsFav={pokemonIsFav} />
    </div>
  );
}
