import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { themeReducer } from '../themes/reducer';
import { translateReducer } from '../translates/reducer';
import { appReducer } from '../modules/app/reducer';

const rootReducer = combineReducers({
    app: appReducer,
    theme: themeReducer,
    router: routerReducer,
    translates: translateReducer,
});

export default rootReducer;