import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './App';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
// delete window.__PRELOADED_STATE__

// @todo prelaodstae?
const store = configureStore(preloadedState); //eslint-disable-line

window.onload = () => {
  Loadable.preloadReady().then(() => {
    console.log(111);

    hydrate(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
      document.getElementById('app')
    );
  });
};
