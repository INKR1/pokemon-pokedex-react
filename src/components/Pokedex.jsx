import React from "react";
import Pokemon from "./Pokemon";

export default function Pokedex({pokemons, loading}) {
  console.log("all pokemons ", pokemons)
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <div>Pages</div>
      </div>
      {loading ? (
        <div>Loading the pokemons...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return (
                <Pokemon key={index} pokemon={pokemon} />
              );
            })}
        </div>
      )}
    </div>
  );
};
