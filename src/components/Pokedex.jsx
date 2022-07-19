import React from "react";

export default function Pokedex(props) {

  const { pokemons, loading } = props;
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <div>Pages</div>
      </div>
      {loading ? (
        <div>Loading the pokemons...</div>
      ): (
        <div className="pokedex-grid">
          {pokemons.map((pokemon, index) => (
            <div className="pokemon-card" key={index}>
              <div> # {pokemon.id} </div>
              <div> Name:{pokemon.name} </div>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
          ))}
          </div>
      )}
      </div>
  );
}
