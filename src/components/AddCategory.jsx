import { useState } from 'react';
import { VscSearch } from 'react-icons/vsc';
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length <= 1) return;
        
        setInputValue('');
        onNewCategory(inputValue.trim());   
    }

    return (

        <form onSubmit={onSubmit} aria-label="form">
            <label htmlFor="search" className='label-search' >Search GIFs</label>
            <input
                id="search"
                type="text"
                placeholder="Search GIFs"
                value={inputValue}
                onChange={onInputChange}
            />

            <button className="btn-search" type='submit' name="search button" aria-label='search button'>
                <VscSearch className='search-icon' />
            </button>
        </form>

    )
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}

AddCategory.defaultProps = {
    onNewCategory: 'There is not category'
}