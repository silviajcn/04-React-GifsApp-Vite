import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';
import { Loader } from './Loader';

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