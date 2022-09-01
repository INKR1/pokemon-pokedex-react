import { useContext } from "react";

import FavoritesContext from "../contexts/favPokemonContext"
import Pokemon from "../components/PokemonWrapper"

export default function Favorites() {

  const favCtx = useContext(FavoritesContext);

  let content;

  if(favCtx.favorites.length === 0) {
    content = <p>You got no favorites yet</p>
  } else {
    content = <Pokemon favorites={favCtx.favorites} />

  }

  // console.log("favorites pokemons ID nr.: " + favorites);

  return (
    <div>
      <h1>My Favorites</h1>
        {content}
    </div>
  );
}
