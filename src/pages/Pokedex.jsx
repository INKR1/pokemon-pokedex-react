import { useState, useEffect } from 'react';
import Pages from "../components/Pages";
import Pokemons from "../components/Pokemons";
import { getPokemons, getPokemonData } from "../data/api"

export default function Pokedex() {

  const [loader, setLoader] = useState(true);
  const [loadedPokemons, setLoadedPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // useEffect(() => {
  //   setLoader(true);
  //   fetch(`https://pokeapi.co/api/v2/pokemon?limit=9&offset=0`)
  //   .then(res => res.json())
  //   .then(data => {
  //     const pokemons = [];
  //     for (const key in data) {
  //       const pokemon ={
  //         id: key,
  //         ...data[key]
  //       };
  //       pokemons.push(pokemon);
  //     }
  //     setLoader(false); 
  //     setLoadedPokemons(pokemons);
  //   });
  // }, []);

  const pokemonsPerPage = 21;

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoader(true);
        const data = await getPokemons(pokemonsPerPage, pokemonsPerPage * page);
        const promises = data.results.map(
          async (pokemon) => await getPokemonData(pokemon.url)
        );
        const results = await Promise.all(promises);
        setLoadedPokemons(results);
        setLoader(false);
        setTotalPages(Math.ceil(data.count / pokemonsPerPage));
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemons();
  }, [page]);


  if(loader) {
    return <article><div className="pokemon"></div></article>
  }


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
                <Pokemons 
                pokemons={loadedPokemons} 
                />
        </div>
    </div>
  );
}
