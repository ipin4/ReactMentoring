import React from 'react';
import { render } from 'react-dom';

import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  browserHistory,
  Route,
} from 'react-router-dom'
import history from './history'

import App from './components/App';
import getStoreConfig from "./store.js";

const store = getStoreConfig(window.PRELOADED_STATE);
delete window.PRELOADED_STATE;

render(
  <Router history={history}>
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>
, document.getElementById('root'));
