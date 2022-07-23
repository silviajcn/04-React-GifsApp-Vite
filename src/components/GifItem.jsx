import { GoHeart } from 'react-icons/go';
import CopyLink from './CopyLink';
import PropTypes from 'prop-types';

const GifItem = ({ id, title, url, onNewFav}) => {
 
    const onNewFavGif = () => {

        const newFav = {
            id: id,
            title: title,
            url: url
        }

        onNewFav(newFav);
    }

    return (
        <div className="card">

            <div className='container-btns-icons'>
                <CopyLink link={url} />
                <button
                    className="fav-icon"
                    aria-label="button fav"
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

export default GifItem;

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    onNewFav: PropTypes.func.isRequired
}

GifItem.defaultProps = {
    title: 'There is not title',
    url: 'There is not URL'
}