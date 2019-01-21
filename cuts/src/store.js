import {createStore, applyMiddleware, compose } from 'redux';
import 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const init = {};
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, init,
composeEnhancers(applyMiddleware(...middleware)));

export default store;