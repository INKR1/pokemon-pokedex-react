import { useState, useEffect } from "react";
// import { getFavPokemons } from "../data/api"

// import FavoritesContext from "../contexts/favPokemonContext"
import PokemonWrapper from "../components/PokemonWrapper"


export default function Favorites() {

  const [pokemons, setPokemons] = useState([]);
  
  let favPokemonsStr = localStorage.getItem("favPokemons");
  let favPokemonsSet = new Set(JSON.parse(favPokemonsStr));
  if(favPokemonsSet === undefined) throw new Error("favPokemonsSet is undefined")

  useEffect(() => {
    async function fetchData(){
      const pokeList = await getPokemonFromApi(favPokemonsSet);
      setPokemons(pokeList);
    }
    fetchData();
  },[]);

   console.log(pokemons)
let content = "";

  if(pokemons.length === 0) {
    content = <p>You got no favorites yet</p>
  } else {
     content =  //<Pokemons pokemons={pokemons} />
<ul className="pokemon-list">
                {/* {console.log(props.pokemons)} */}
                {pokemons.map((pokemon, index) => (
                    <PokemonWrapper
                    key = {index}
                    pokemon = {pokemon}
                    />
                ))}
            </ul>
  }

  // console.log("favorites pokemons: " + favCtx.favorites);
  // console.log("favorites content: " + content);

  return (
    <div>
      <h1>My Favorites</h1>
        {content}
    </div>
  );
}

async function getPokemonFromApi(pokemonIdList){
    let dataList = [];
    for(const id of pokemonIdList)
    {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data =  await res.json()
      dataList.push(data);
    }
  
    // pokemonIdList.forEach(async pokemonId => {
    //   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    //   const data =  await res.json()
    //   dataList.push(data);
    //   })
      return dataList;
    };
