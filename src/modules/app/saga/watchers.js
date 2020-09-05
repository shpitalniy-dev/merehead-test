import { takeEvery } from 'redux-saga/effects';
import actionTypes from '../../../constants/actionTypes';
import * as workers from './workers';

export function* appWatchers() {
    yield takeEvery(actionTypes.ADD_USER, workers.addUser);
    yield takeEvery(actionTypes.GET_USERS, workers.getUsers);
    yield takeEvery(actionTypes.DELETE_USER, workers.deleteUser);
    yield takeEvery(actionTypes.UPDATE_USER, workers.updateUser);
    yield takeEvery(actionTypes.GET_MORE_USERS, workers.getMoreUsers);
}