import React from "react";

export default function Pokemon({ pokemon }) {
  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-image"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div># {pokemon.id} </div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, index) => {
              return (
              <div className="pokemon-type-item" key={index}>
                {type.type.name}
              </div>
              );
            })}
          </div>
          <button className="liked-pokemon-btn">I like it</button>
        </div>
      </div>
    </div>
  );
}
