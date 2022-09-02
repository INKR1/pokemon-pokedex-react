import PokemonWrapper from "./PokemonWrapper"

export default function Pokemons(props) {
    return (
        <ul className="pokemon-list">
            {props.pokemons.map(pokemon => (
                <PokemonWrapper
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.type}
                // img={pokemon.sprites.front_default}
                />
            ))}
        </ul>
    )
}