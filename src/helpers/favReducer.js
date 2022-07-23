

export const favReducer = (initialState = [], action) => {
    

    switch (action.type) {
        case '[FAVs] Add Fav':
            return [...initialState, action.payload];
        
        case '[FAVs] Remove Fav':
            return initialState.filter(fav => fav.id !== action.payload);
    
        default:
            return initialState;
    }
};