import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { applyMiddleware, compose, createStore } from 'redux';
import createHistory from 'history/createHashHistory';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer from './reducers';
const history = createHistory();
injectTapEventPlugin();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history),
        thunk
      ),
    ),
  );
render(
    <MuiThemeProvider>
      <Provider store={store}>
        <App history={history}/>
      </Provider>
    </MuiThemeProvider>,
    document.getElementById('root'));