import config from '../config/config';
import constants from '../constants/constants';
import actionTypes from '../constants/actionTypes';
import { getTranslatesByLocale } from './translates';

const initialState = {
    locale: config.defaultLocale,
    dictionary: getTranslatesByLocale(config.defaultLocale),
}

export const translateReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case actionTypes.CHANGE_LOCALE: 
            newState.locale = action.payload;
            newState.dictionary = getTranslatesByLocale(action.payload);
            return newState;
        default:
            return newState;
    }
}