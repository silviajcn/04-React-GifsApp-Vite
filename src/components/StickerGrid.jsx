import { StickerItem } from './StickerItem';
import useFetchStickers from '../hooks/useFetchStickers';
import { Loader } from './Loader';
import PropTypes from 'prop-types';

export const StickerGrid = ({ category }) => {

    const { images, isLoading } = useFetchStickers(category);

    return (
        <>

            {
                isLoading && (<Loader />)
            }

            <h2>{category}</h2>

            <div className='card-grid'>
                {
                    images.map((img) => (
                        <StickerItem
                            key={img.id}
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
};

StickerGrid.propTypes = {
    category: PropTypes.string.isRequired
}

StickerGrid.defaultProps = {
    category: 'There is not category'
}