import { GoHeart } from 'react-icons/go';
import CopyLink from './CopyLink';
import PropTypes from 'prop-types';


const GifItemTrending = ({ title, url}) => {
    return (
        <div className="card card2">

            <div className='container-btns-icons'>
                <CopyLink link={url} />
                <button className="fav-icon" aria-label="btn-fav">
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
    url: PropTypes.string.isRequired
}

GifItemTrending.defaultProps = {
    title: 'There is not title',
    url: 'There is not URL'
}