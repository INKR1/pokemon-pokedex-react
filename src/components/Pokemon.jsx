import React from "react";

export default function Pokemon({pokemon}) {

  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <div># {pokemon.id}</div>
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-image"
        />
        <div>Name: {pokemon.name}</div>
      </div>
    </div>
  );
}
