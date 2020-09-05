import { takeEvery } from 'redux-saga/effects';
import actionTypes from '../../constants/actionTypes';
import * as workers from './workers';

export function* translatesWatchers() {
    yield takeEvery(actionTypes.CHANGE_LOCALE_ASYNC, workers.changeLocale);
}