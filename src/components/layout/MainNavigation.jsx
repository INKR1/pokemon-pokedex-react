import { useContext } from 'react';
import { Link } from 'react-router-dom';

import  FavoritesContext  from '../../contexts/favPokemonContext';

export default function MainNavigation() {

    const favCtx = useContext(FavoritesContext);
  return (
    <div className='header'>
        <div className='logo'> 
            <Link to="/">pokemon!!!</Link>
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
                        My Favorites
                        <span className='badge'>{favCtx.totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
