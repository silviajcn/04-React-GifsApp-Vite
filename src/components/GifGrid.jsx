import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';
import { Loader } from './Loader';
import PropTypes from 'prop-types';

export const GifGrid = ({ category, onNewFav }) => {
     
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>

            {
                isLoading && (<Loader />)
            }

            <h2>{category}</h2>

            <div className='card-grid'>
                {
                    images.map((img) => (
                        <GifItem
                            key={img.id}
                            {...img}
                            onNewFav={onNewFav}
                        />
                    ))
                }
            </div>
        </>
    )
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
    onNewFav: PropTypes.func.isRequired
}

GifGrid.defaultProps = {
    category: 'There is not category'
}