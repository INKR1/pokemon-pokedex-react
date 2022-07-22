import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";
import { searchForPokemon, getPokemons, getPokemonData } from "./data/api";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const pokemonsPerPage = 30; 

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(pokemonsPerPage, pokemonsPerPage * page);
      const promises = data.results.map(
        async (pokemon) => await getPokemonData(pokemon.url)
        );
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / pokemonsPerPage));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("loaded");
    fetchPokemons();
  }, [page]);


  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Pokedex 
        pokemons={pokemons} 
        loading={loading} 
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;
