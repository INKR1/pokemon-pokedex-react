import PokemonWrapper from "./PokemonWrapper"

export default function Pokemons(props) {
    return (
        <ul className="pokemon-list">
             {/* {console.log(props.pokemons)} */}
            {props.pokemons.map(pokemon => (
                <PokemonWrapper
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                types={pokemon.types}
                img={pokemon.sprites.front_default}
                // img={pokemon.sprites.versions.generation_v.black_white.animated.front_default}
                temp={pokemon}
                imgShiny={pokemon.sprites.front_shiny}
                />
            ))}
        </ul>
    )
}