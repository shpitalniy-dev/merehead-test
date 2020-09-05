import actionTypes from '../../constants/actionTypes';
import config from '../../config/config';

const initialState = {
    index: config.defaultIndex,
    users: config.defaultUsers,
    isLoading: config.defaultIsLoading,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_IS_LOADING: 
            return {
                ...state,
                isLoading: action.payload,
            };
        case actionTypes.SET_USERS: 
            return {
                ...state,
                users: action.payload,
                isLoading: false,
            };
        case actionTypes.SET_INDEX: 
            return {
                ...state,
                index: action.payload,
            };
        default: 
            return state;
    }
};