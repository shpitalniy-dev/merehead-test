import { takeEvery } from 'redux-saga/effects';
import actionTypes from '../../constants/actionTypes';
import * as workers from './workers';

export function* themeWatchers() {
    yield takeEvery(actionTypes.CHANGE_THEME_ASYNC, workers.changeTheme);
}