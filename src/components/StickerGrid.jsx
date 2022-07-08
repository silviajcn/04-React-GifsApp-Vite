import { StickerItem } from './StickerItem';
import useFetchStickers from '../hooks/useFetchStickers';
import { Loader } from './Loader';

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