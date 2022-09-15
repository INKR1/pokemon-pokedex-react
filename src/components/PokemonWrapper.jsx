export default function PokemonWrapper({ pokemon, toggleFavStatus, likedPokemons }) {

  // console.log(likedPokemons)
  // console.log("this is pokemons: " + pokemon)
  // console.log(pokemon)
  
  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-img"
        />
      </div>
      <div>
        <img
          src={pokemon.sprites.front_shiny}
          alt={pokemon.name}
          className="pokemon-img"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div># {pokemon.id} </div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            <div className="pokemon-type-item">{/* {(pokemon.types)} */}</div>

            {pokemon.types.map((type, id) => {
              return (
                <div className="pokemon-type-item" key={id}>
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <svg className="pokeball" onClick={() => toggleFavStatus(pokemon.id)}>
            <use
              xlinkHref={likedPokemons ? "#likedPokeball" : "#pokeball"}
            ></use>
          </svg>
        </div>
      </div>
    </div>
  );
}
