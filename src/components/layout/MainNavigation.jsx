
import { Link } from 'react-router-dom';
import "../../App.css"

// import  FavoritesContext  from '../../contexts/favPokemonContext';

const logoImg = "https://sg.portal-pokemon.com/img/common/logo.png";

export default function MainNavigation() {

    // const favCtx = useContext(FavoritesContext);
  return (
    <div className='header'>
        <div className='logo'> 
            <Link to="/">  <img src={logoImg} alt="Pokemon-logo" className="navbar-img" /></Link>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
                <li>
                    <Link to="/pokedex">Pokedex</Link>
                </li>
                <li>
                    <Link to="/favorites">
                    <svg className="total-fav-pokemons">
                        <use xlinkHref="#likedPokeball"></use>
                    </svg>
                        {/* <span className='badge'>{favCtx.totalFavorites}</span> */}
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
