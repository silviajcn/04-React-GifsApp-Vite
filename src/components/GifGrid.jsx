import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';
import { Loader } from './Loader';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
    
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
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

GifGrid.defaultProps = {
    category: 'There is not category'
}