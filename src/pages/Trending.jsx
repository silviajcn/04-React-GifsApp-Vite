import { Loader } from "../components";
import GifItemTrending from "../components/GifItemTrending";
import useFetchTrending from "../hooks/useFetchTrending";
import { MdTrendingUp } from "react-icons/md";


export const Trending = () => {

    const { images, isLoading } = useFetchTrending();

    return (
        <main>

            {
                isLoading && (<Loader />)
            }

            <h2 className="title-page">
                <MdTrendingUp className="icon-title-page"/>
                Trending Gifs
            </h2>

            <div className='card-grid'>
                {
                    images.map((img) => (
                        <GifItemTrending
                            key={img.id}
                            { ...img }
                        />
                    ))
                }
            </div>
        </main>
    )
};