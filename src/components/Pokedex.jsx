import React from "react";
import Pokemon from "./Pokemon";

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
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon) => (
              <Pokemon key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
      )}
    </div>
  );
}
 