import React from "react";
import { useState } from "react";
import { searchForPokemon } from "../data/api.js";

export default function Searchbar(props) {
  const [search, setSearch] = useState("dito");
  const [pokemon, setPokemon] = useState();
  const [pokemonId, setPokemonId] = useState();

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const buttonClickHandler = (e) => {
    e.preventDefault();
    onNameSearchHandler(search);
    onIdSearchHandler(search);
  };

  const onNameSearchHandler = async (pokemonName) => {
    const resultName = await searchForPokemon(pokemonName);
    setPokemon(resultName);
  };

  const onIdSearchHandler = async (pokemonNumber) => {
    const resultNumber = await searchForPokemon(pokemonNumber);
    setPokemonId(resultNumber);
  };

  return (
    <div className="searchbar-wrapper">
      <div className="searchbar-left">
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
      </div>
      <div className="searchbar-right">
        {pokemon || pokemonId ? (
          <div className="pokemon-container">
            <div>
              {" "}
              Name: <span>{pokemon.name}</span>
            </div>
            <div> Weight: {pokemon.weight} </div>
            <div> # {pokemon.id}</div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
        ) : (
          <h1> :)</h1>
        )}
      </div>
    </div>
  );
}
