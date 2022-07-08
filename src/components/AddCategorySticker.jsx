import { useState } from 'react';
import { VscSearch } from 'react-icons/vsc';

export const AddCategorySticker = ({ onNewCategorySt }) => {
    
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length <= 1) return;
        
        setInputValue('');
        onNewCategorySt(inputValue.trim());   
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="search" className='label-search' >Search Stickers</label>
            <input
                id="search"
                type="text"
                placeholder="Search Stickers"
                value={inputValue}
                onChange={onInputChange}
            />

            <button className="btn-search" type='submit' name="search button" aria-label='search button'>
                <VscSearch className='search-icon' />
            </button>
        </form>
    )
};