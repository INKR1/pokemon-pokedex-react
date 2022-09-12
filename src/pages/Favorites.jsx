import { useContext } from "react";

import FavoritesContext from "../contexts/favPokemonContext"
import PokemonWrapper from "../components/PokemonWrapper"

export default function Favorites(props) {

  const favCtx = useContext(FavoritesContext);

  let content;

  if(favCtx.favorites.length === 0) {
    content = <p>You got no favorites yet</p>
  } else {
     content =  //<Pokemons pokemons={favCtx.favorites} />
<ul className="pokemon-list">
                {/* {console.log(props.pokemons)} */}
                {favCtx.favorites.map((pokemon, index) => (
                    <PokemonWrapper
                    key = {index}
                    pokemon = {pokemon}
                    />
                ))}
            </ul>
  }

  console.log("favorites pokemons: " + favCtx.favorites);
  console.log("favorites content: " + content);

  return (
    <div>
      <h1>My Favorites</h1>
        {content}
    </div>
  );
}
