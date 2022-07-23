import { GoHeart } from 'react-icons/go';
import { FavGrid } from '../components/FavGrid';
import { useFavs } from '../hooks/useFavs';

export const Favorites = () => {

    const { favs, handleDeleteFav, favsCount } = useFavs();

    return (
        <div>

            <h2 className="title-page">
                <GoHeart className="icon-title-page2" />
                Favorites
            </h2>

            <p>You have {favsCount} favorites!</p>

            <FavGrid favs={favs} onDeleteFav={handleDeleteFav} />

            {/* <p className="construction-text">The favorites section will be available soon on this page!</p>

            <img src="https://media.giphy.com/media/k0ijJhqrUP4T2EvmJ1/giphy.gif" alt="construction gif" className="construction-gif"/> */}
        </div>
    )
};