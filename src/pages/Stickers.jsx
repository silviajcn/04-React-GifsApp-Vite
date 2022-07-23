import { useState } from 'react';
import { AddCategorySticker, StickerGrid } from '../components';
import { useFavs } from '../hooks/useFavs';

export const Stickers = () => {

    const { handleNewFav } = useFavs();

    const [categories, setCategories] = useState(['Stickers']);
    //console.log(categories);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            <AddCategorySticker
                onNewCategorySt={e => onAddCategory(e)}
            />
            
            <main>
                {
                    categories.map((category) =>
                    (
                        <StickerGrid
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