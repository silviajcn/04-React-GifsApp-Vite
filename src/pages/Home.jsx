import { useState } from 'react';
import { AddCategory, GifGrid } from '../components';
import { useFavs } from '../hooks/useFavs';

export const Home = () => {

    const { handleNewFav } = useFavs();

    const [categories, setCategories] = useState(['Gifs']);
    //console.log(categories);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            <AddCategory
                onNewCategory={e => onAddCategory(e)}
            />
            
            <main>
                {
                    categories.map((category) =>
                    (
                        <GifGrid
                            key={category}
                            category={category}
                            onNewFav={handleNewFav}
                        />
                    ))
                }
            </main>
        </>
    )
};