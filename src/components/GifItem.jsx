import { GoHeart } from 'react-icons/go';
import CopyLink from './CopyLink';
import PropTypes from 'prop-types';

const GifItem = ({ title, url}) => {

    return (
        <div className="card">

            <div className='container-btns-icons'>
                <CopyLink link={url} />
                <button className="fav-icon" aria-label="button fav">
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
    url: PropTypes.string.isRequired
}

GifItem.defaultProps = {
    title: 'There is not title',
    url: 'There is not URL'
}