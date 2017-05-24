/**
 * NPM packages.
 */
import ReactDOM       from 'react-dom';
import React          from 'react';
import {Provider}     from 'react-redux';
import {createStore}  from 'redux';

/**
 * Project packages.
 */
import App from './app';

/**
 * Reducer / Store
 */
const defaultState  = {
  appName: 'CONDUIT',
  articles: null
};
const reducer       = function(state = defaultState, action) {
  return state;
};
const store         = createStore(reducer);

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root'));
