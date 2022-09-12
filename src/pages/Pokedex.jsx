import { useState, useEffect } from "react";
import Pages from "../components/Pages";
import PokemonWrapper from "../components/PokemonWrapper";
import { getPokemons, getPokemonData } from "../data/api";

export default function Pokedex(props) {
  const [loader, setLoader] = useState(true);
  const [loadedPokemons, setLoadedPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const pokemonsPerPage = 21;

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoader(true);
        const data = await getPokemons(pokemonsPerPage, pokemonsPerPage * page);
        const promises = data.results.map(
          async (pokemon) => await getPokemonData(pokemon.url)
        );
        const pokemons = [];
        const results = await Promise.all(promises);
        pokemons.push(results);
        console.log(results);
        setLoadedPokemons(results);
        setLoader(false);
        setTotalPages(Math.ceil(data.count / pokemonsPerPage));
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemons();
  }, [page]);

  if (loader) {
    return (
      <article>
        <div className="pokemon"></div>
      </article>
    );
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
        {loadedPokemons.map((pokemon, index) => (
          <PokemonWrapper key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
