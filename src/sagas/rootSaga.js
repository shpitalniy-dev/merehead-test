import { all, fork } from 'redux-saga/effects';
import { appWatchers } from '../modules/app/saga/watchers';

const sagas = [
    appWatchers,
];

export default function* rootSaga() {
    yield all(sagas.map(fork));
}