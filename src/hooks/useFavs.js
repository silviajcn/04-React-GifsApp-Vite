import { useReducer, useEffect } from 'react';
import { favReducer } from '../helpers/favReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('favs')) || [];
}

export const useFavs = () => {
    
    const [favs, dispatch] = useReducer(favReducer, [], init);

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favs));
    
    }, [favs]);

    const handleNewFav = (fav) => {
        const action = {
            type: '[FAVs] Add Fav',
            payload: fav
        }

        dispatch(action);
    }

    const handleDeleteFav = (id) => {
        dispatch({
            type: '[FAVs] Remove Fav',
            payload: id
        })
    }

    return {
        favs,
        handleNewFav,
        handleDeleteFav,
        favsCount: favs.length
    }
    
};