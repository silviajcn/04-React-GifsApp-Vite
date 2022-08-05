import { FaTrashAlt } from 'react-icons/fa';
import CopyLink from './CopyLink';
import PropTypes from 'prop-types';

const FavItem = ({ fav, onDeleteFav }) => {

    return (
        <div className="card card4">

            <div className='container-btns-icons'>
                <CopyLink link={fav.url} />
                <button
                    className="link-icon"
                    aria-label="button fav"
                    onClick={() => onDeleteFav(fav.id)}
                >
                    <FaTrashAlt className="trash-icon"/>
                </button>
            </div>

            <img src={fav.url} alt={"image gif" + fav.title} />
            
            <p className="title-card">{fav.title}</p>
        </div>
    )
};

export default FavItem;

FavItem.propTypes = {
    fav: PropTypes.object.isRequired,
    onDeleteFav: PropTypes.func.isRequired
}