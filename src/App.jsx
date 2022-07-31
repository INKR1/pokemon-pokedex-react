/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";
import { getPokemons, getPokemonData } from "./data/api";

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [likes, setLikes] = useState(new Set());
  const change = useRef(false);
 
  const [loading, setLoading] = useState(false);
  const loaded = useRef(false);

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const pokemonsPerPage = 21; 

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
    fetchPokemons();
  }, [page]);

  useEffect(() => {
    let l = localStorage.getItem('pokemonsLikes');
    if (null === l) {
        l = JSON.stringify([]);
    }
    l = JSON.parse(l);
    setLikes(new Set(l));
}, []);

useEffect(() => {
    if (loaded.current) {
        localStorage.setItem('pokemonsLikes', JSON.stringify([...likes]));
    }
    loaded.current = true;
}, [likes]);


  const likeButtonPressed = id => {
    change.current = true;
    const likesCopy = new Set(likes); 
    likesCopy.has(id) ? likesCopy.delete(id) : likesCopy.add(id);
    setLikes(likesCopy);
 }


  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Pokedex 
        pokemons={pokemons} 
        loading={loading} 
        setPage={setPage}
        page={page}
        totalPages={totalPages}
        likeButtonPressed={likeButtonPressed}
        likes={likes}
      />
    </div>
  );
}

export default App;
