import React from "react";
import { useState } from "react";
import { searchForPokemon } from "../data/api.js";

export default function Searchbar(props) {

  const [search, setSearch] = useState("dito");
  const [pokemon, setPokemon] = useState();

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const buttonClickHandler = (e) => {
    e.preventDefault();
    onSearchHandler(search);
  };

  const onSearchHandler = async (pokemonName) => {
    const result = await searchForPokemon(pokemonName);
    setPokemon(result)
  }

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search for a Pokemon"
          onChange={onChangeHandler}
        />
      </div>
      <div className="searchbar-button">
        <button onClick={buttonClickHandler}>Search</button>
      </div>
      {pokemon ? (
        <div className="pokemon-container">
          <div> Name: {pokemon.name} </div>
          <div> Weight: {pokemon.weight} </div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ) : (
            <h1>No Pokemon Found</h1>
      ) }
    </div>
  );
}
