import React from 'react';
import { useState, useEffect } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from './components/Pokedex';
import Searchbar from "./components/Searchbar";
import { getPokemons } from './data/api';


function App() {

  const [pokemons, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const result = await getPokemons();
      const data = await result.json();
      setPokemon(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("loaded");
    fetchPokemons()
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading}/>
    </div>
  );
}

export default App;
