import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import Routing from './modules/routing/Routing.jsx';
import rootReducer from './rootReducer/rootReducer';
import rootSaga from './sagas/rootSaga.js';

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, routerMiddleware(history)));

window.store = store; //ToDo Must be deleted in production

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <Routing history={history} />
    </Provider>, 
    document.getElementById('root'));