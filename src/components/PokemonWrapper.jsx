import { useContext } from "react";
import FavoritesContext from "../contexts/favPokemonContext";

export default function PokemonWrapper(props) {
  
  const favCtx = useContext(FavoritesContext);

  const pokemonIsFav = favCtx.pokemonIsFavorite(props.id);
  
  function toggleFavStatus() {
    if (pokemonIsFav) {
      favCtx.removeFromFavorites(props.id);
    } else {
      favCtx.addToFavorites({
        id: props.id,
        name: props.name,
        type: props.type,
        // img: props.sprites
        img: props.sprites.front_default,
        // img2: props.sprites.front_shiny
      });
    }
  }
  
  return (
    <div className="pokemon-card">
        <div className="pokemon-img-container">
          <img
            alt={props.name}
            // src={props.sprites}
            src={props.img}
            className="pokemon-img"
          />
      </div>
      <div>
          <img src={props.imgShiny} 
          alt={props.name} 
          className="pokemon-img"/>
        </div>
        <div className="card-body">
          <div className="card-top">
            <h3>{props.name}</h3>
            <div># {props.id} </div>
          </div>
          <div className="card-bottom">
            <div className="pokemon-type">
            <div className="pokemon-type-item">
                    {/* {props.types} */}
                  </div>
              {props.types.map((type, id) => {
                return (
                  <div className="pokemon-type-item" key={id}>
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
    </div>
  );
}
