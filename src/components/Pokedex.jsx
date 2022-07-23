import React from "react";
import Pages from "./Pages";
import Pokemon from "./Pokemon";

export default function Pokedex({
  pokemons,
  loading,
  page,
  setPage,
  totalPages,
}) {
  const clickedLeftHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const clickedRightHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <Pages
          page={page + 1}
          totalPages={totalPages}
          clickedLeft={clickedLeftHandler}
          clickedRight={clickedRightHandler}
        />
      </div>
      {loading ? (
        <article>
          <div className="pokemon"></div>
      </article>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </div>
      )}
    </div>
  );
}
