import { useContext } from "react";
import FavoritesContext from "../contexts/favPokemonContext";

export default function PokemonWrapper(props) {
  
  const favCtx = useContext(FavoritesContext);

  const pokemonIsFav = favCtx.pokemonIsFavorite(props.id);

  function toggleFavStatus() {
    if (pokemonIsFav) {
      favCtx.removeFromFavorites(props.id);
    } else {
      favCtx.addToFavorite({
        id: props.id,
        name: props.name,
        type: props.type,
        // img: props.sprites.front_default
      });
    }
  }
  
  return (
    <div className="pokemon-card">
        <div className="pokemon-img-container">
          <img
            alt={props.name}
            // src={props.sprites.front_default}
            className="pokemon-img"
          />
        </div>
        <div className="card-body">
          <div className="card-top">
            <h3>{props.name}</h3>
            <div># {props.id} </div>
          </div>
          <div className="card-bottom">
            <div className="pokemon-type">
            <div className="pokemon-type-item">
                    {props.type}
                  </div>
              {/* {props.types.map((type, id) => {
                return (
                  <div className="pokemon-type-item" key={id}>
                    {type.type.name}
                  </div>
                );
              })} */}
            </div>
            <svg
              className="pokeball"
              onClick={toggleFavStatus}
            >
              <use xlinkHref={pokemonIsFav ? "#likedPokeball" : "#pokeball"}></use>
            </svg>
          </div>
        </div>
    </div>
  );
}
