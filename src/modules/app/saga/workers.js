/* eslint-disable guard-for-in */
import { put, call, select, delay } from 'redux-saga/effects';
import actionTypes from '../../../constants/actionTypes';
import * as api from './api';
import * as selectors from '../selectors';
import * as utils from '../../../utils/utils';

export function* getUsers() {
    let response = yield call(api.getUsers);

    yield delay(1000);

    if (response.status === 200) {
        response = yield response.json().then(result => result);

        const index = yield select(selectors.getIndex);

        yield put({
            type: actionTypes.SET_USERS,
            payload: response.slice(0, index),
        });
    } else {
        utils.toastError('Can not get data from server');
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    }
}

export function* addUser(action) {
    if (!action.payload) {
        return;
    }

    if (Object.values(action.payload).some(item => item.current.value.trim() === '')) {
        return;
    }

    const user = {};

    for (let key in action.payload) {
        user[key] = action.payload[key].current.value.trim();
        action.payload[key].current.value = '';
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });


    const response = yield call(api.addUser, user);

    yield delay(1000);

    if (response.status === 200) {
        utils.toastSuccess('User was created');
    } else {
        utils.toastError('Can not create user');
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
};

export function* deleteUser(action) {
    if (!action.payload) {
        return;
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });

    const response = yield call(api.deleteUser, action.payload);

    yield delay(1000);

    if (response.status === 200) {
        utils.toastSuccess('User was deleted');
        yield put({ type: actionTypes.GET_USERS });
    } else {
        utils.toastError('Can not delete user');
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    }
}

export function* updateUser(action) {
    if (!action.payload) {
        return;
    }

    const { id, refs, setEdit } = action.payload;
    
    if (Object.values(refs).some(item => item.current.value.trim() === '')) {
        return;
    }

    const user = {};

    for (let key in refs) {
        user[key] = refs[key].current.value.trim();
    }

    yield put({ type: actionTypes.SET_IS_LOADING, payload: true });

    const response = yield call(api.updateUser, id, user);

    yield delay(1000);

    if (response.status === 200) {
        setEdit(false);
        utils.toastSuccess('User was updated');
        yield put({ type: actionTypes.GET_USERS });
    } else {
        utils.toastError('Can not update user');
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    }
}

export function* getMoreUsers() {
    const index = yield select(selectors.getIndex);

    yield put({ type: actionTypes.SET_INDEX, payload: index + 5 });

    yield put({ type: actionTypes.GET_USERS });
}