import { put, call } from 'redux-saga/effects';
import actionTypes from '../../constants/actionTypes';
import localStorageVariables from '../../constants/localStorageVariables';
import * as utils from '../../utils/utils';

export function* changeLocale(action) {
    if (!action.payload) {
        return false;
    }

    // yield call(utils.setItemToLocalStorage, localStorageVariables.LOCALE, action.payload);

    yield put({ type: actionTypes.CHANGE_LOCALE, payload: action.payload });
}