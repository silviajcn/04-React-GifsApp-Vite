import { GoHeart } from 'react-icons/go';
import CopyLink from './CopyLink';
import PropTypes from 'prop-types';


const GifItemTrending = ({ id, title, url, onNewFav}) => {

    const onNewFavGif = () => {

        const newFav = {
            id: id,
            title: title,
            url: url
        }

        onNewFav(newFav);
    }

    return (
        <div className="card card2">

            <div className='container-btns-icons'>
                <CopyLink link={url} />
                <button
                    className="fav-icon"
                    aria-label="btn-fav"
                    onClick={() => onNewFavGif(id)}
                >
                    <GoHeart className="fav-icon"/>
                </button>
            </div>

            <img src={url} alt={"image gif" + title} />

            <p className="title-card">{title}</p>
        </div>
    )
};

export default GifItemTrending;

GifItemTrending.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    onNewFav: PropTypes.func.isRequired
}

GifItemTrending.defaultProps = {
    title: 'There is not title',
    url: 'There is not URL'
}