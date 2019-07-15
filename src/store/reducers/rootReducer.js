import * as actionTypes from '../actions/actionTypes';

const initState = {
    city: '',
    restaurants: []
};

const reducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.SEARCH_RESTAURANTS:
            return {
                city: action.data.city,
                restaurants: action.data.restaurants
            };

        default:
                return state;
    }
};

export default reducer;