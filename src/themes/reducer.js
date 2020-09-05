import config from '../config/config';
import constants from '../constants/constants';
import actionTypes from '../constants/actionTypes';
import { getStylesByTheme } from './theme';

const initialState = {
    name: config.defaultTheme,
    styles: getStylesByTheme(config.defaultTheme),
}

export const themeReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case actionTypes.CHANGE_THEME: 
            newState.name = action.payload;
            newState.styles = getStylesByTheme(action.payload);
            return newState;
        default:
            return newState;
    }
}