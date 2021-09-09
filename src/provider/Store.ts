import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from '../reducers/rootReducers';
import logger from 'redux-logger';
import {rootSaga} from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

export default store;