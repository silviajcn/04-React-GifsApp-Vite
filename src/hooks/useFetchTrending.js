import { useEffect, useState } from 'react';
import getTrending from '../helpers/getTrending';

const useFetchTrending = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getTrending();
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
};

export default useFetchTrending;