import { put, call } from 'redux-saga/effects';
import actionTypes from '../../constants/actionTypes';
import localStorageVariables from '../../constants/localStorageVariables';
import * as utils from '../../utils/utils';

export function* changeTheme(action) {
    if (!action.payload) {
        return false;
    }

    // yield call(utils.setItemToLocalStorage, localStorageVariables.THEME, action.payload);

    yield put({ type: actionTypes.CHANGE_THEME, payload: action.payload });
}