import { useContext } from "react";
import FavoritesContext from "../contexts/favPokemonContext"
import Pokemon from "../components/Pokemon"

export default function Favorites() {

  // const favorites = []; 

  const favCtx = useContext(FavoritesContext);

  let content;

  if(favCtx.favorites.length === 0) {
    content = <p>You got no favorites yet</p>
  } else {
    content = <Pokemon favorites={favCtx.favorites} />

  }
  
//  const likedPokemons = function(
//   likedPoki) {
//     favorites.push(likedPoki);
//   };

//   likes.forEach(likedPokemons);

  // console.log("favorites pokemons ID nr.: " + favorites);

  return (
    <div>
      <h1>My Favorites</h1>
        {content}
    </div>
    
    // <nav>
    //   <div>
    //     <span>{favorites.length}</span>
    //     <svg className="total-fav-pokemons">
    //       <use xlinkHref="#likedPokeball"></use>
    //     </svg>
    //   </div>
    // </nav>
  );
}
