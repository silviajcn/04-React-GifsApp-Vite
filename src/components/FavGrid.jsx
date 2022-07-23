import PropTypes from 'prop-types';
import FavItem from './FavItem';

export const FavGrid = ({ favs, onDeleteFav }) => {

    return (
        <>
            <div className='card-grid'>
                {
                    favs.map((fav) => (
                        <FavItem
                            key={fav.id}
                            fav={fav}
                            onDeleteFav={onDeleteFav}
                            {...fav}
                            
                        />
                    ))
                }
            </div>
        </>
    )
};

FavGrid.propTypes = {
    favs: PropTypes.array.isRequired,
    onDeleteFav: PropTypes.func.isRequired,
}

FavGrid.defaultProps = {
    favs: 'There is not favs'
}