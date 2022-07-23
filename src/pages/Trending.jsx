import { Loader } from '../components';
import GifItemTrending from '../components/GifItemTrending';
import useFetchTrending from '../hooks/useFetchTrending';
import { MdTrendingUp } from 'react-icons/md';
import { useFavs } from '../hooks/useFavs';

export const Trending = () => {

    const { handleNewFav } = useFavs();

    const { images, isLoading } = useFetchTrending();

    return (
        <main>

            {
                isLoading && (<Loader />)
            }

            <div className="container-banner">
                <img src="https://res.cloudinary.com/silviajcn/image/upload/v1657668810/CURSOS/React%20UDEY/banner_wkwgov.gif" alt="banner page" className="banner" />
            </div>

            <h2 className="title-page">
                <MdTrendingUp className="icon-title-page"/>
                Trending Gifs
            </h2>

            <div className='card-grid'>
                {
                    images.map((img) => (
                        <GifItemTrending
                            key={img.id}
                            {...img}
                            onNewFav={handleNewFav}
                        />
                    ))
                }
            </div>
        </main>
    )
};