import PokemonWrapper from "./PokemonWrapper"

export default function Pokemons(props) {
    return (
        <ul className="pokemon-list">
            {props.pokemon.map(p => (
                <PokemonWrapper
                key={p.id}
                id={p.id}
                name={p.name}
                type={p.type}
                img={p.sprites.front_default}
                />
            ))}
        </ul>
    )
}