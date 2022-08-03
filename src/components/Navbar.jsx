export default function Navbar( { likes }) {

  const favorites = [];


  const logoImg = "https://sg.portal-pokemon.com/img/common/logo.png";

  
 const likedPokemons = function(
  likedPoki) {
    favorites.push(likedPoki);
  };

  likes.forEach(likedPokemons);

  console.log("favorites pokemons nr.: " + favorites);
  return (
    <nav>
      <div>
        <img src={logoImg} alt="Pokemon-logo" className="navbar-img" />
      </div>
      <div>
        <span>{favorites.length}</span>
        <svg className="total-fav-pokemons">
          <use xlinkHref="#likedPokeball"></use>
        </svg>
      </div>
    </nav>
  );
}
