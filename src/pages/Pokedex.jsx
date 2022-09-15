import { useState, useEffect, useRef } from "react";
import Pages from "../components/Pages";
import PokemonWrapper from "../components/PokemonWrapper";
import { getPokemons, getPokemonData } from "../data/api";

export default function Pokedex(props) {
  const [loader, setLoader] = useState(true);
  const [loadedPokemons, setLoadedPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [likedPokemons, setLikedPokemons] = useState(new Set());
  const change = useRef(false);
  const loaded = useRef(false);

  const pokemonsPerPage = 21;

  //FETCH POKEMON DATA IN POKEDEX
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoader(true);
        const data = await getPokemons(pokemonsPerPage, pokemonsPerPage * page);
        const promises = data.results.map(
          async (pokemon) => await getPokemonData(pokemon.url)
        );
        const results = await Promise.all(promises);
        // console.log(results);
        setLoadedPokemons(results);
        setLoader(false);
        setTotalPages(Math.ceil(data.count / pokemonsPerPage));
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemons();
  }, [page]);

// SAVE DATA IN LOCALSTORAGE as string
  useEffect(() => {
    if (loaded.current) {
      localStorage.setItem("favPokemons", JSON.stringify([...likedPokemons]));
      // localStorage.setItem("favPokemons", likedPokemons);
    }
    loaded.current = true;
  }, [likedPokemons]);

// local storage has string we need to deserialize it to set
  useEffect(() => {
    let l = localStorage.getItem("favPokemons");
    console.log(l);
    if (null === l) {
      l = JSON.stringify([]);
    }
    l = JSON.parse(l);
    setLikedPokemons(new Set(l));
  }, []);

// Toggle - ADD OR REMOVE FAVORITES
  const toggleFavStatus = id => {
        change.current = true;
        const likedCopy = new Set(likedPokemons);
        likedCopy.has(id) ? likedCopy.delete(id) : likedCopy.add(id);
        setLikedPokemons(likedCopy);
     }


// LOADER
  if (loader) {
    return (
      <article>
        <div className="pokemon"></div>
      </article>
    );
  }

// console.log(loadedPokemons)

  // POKEDEX PAGES
  const clickedLeftHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const clickedRightHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  // if(likedPokemons === true) {
  //   let favorites = [];
  //   favorites.push(loadedPokemons);
  //   console.log(favorites)
  // }

  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <Pages
          page={page + 1}
          totalPages={totalPages}
          clickedLeft={clickedLeftHandler}
          clickedRight={clickedRightHandler}
        />
      </div>
      <div className="pokedex-grid">
        {loadedPokemons.map((pokemon, index) => (
          <PokemonWrapper 
          key={index} 
          pokemon={pokemon} 
          toggleFavStatus={toggleFavStatus}
          likedPokemons={likedPokemons.has(pokemon.id)}/>
        ))}
      </div>
    </div>
  );
}
