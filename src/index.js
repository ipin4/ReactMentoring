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
import store from "./store.js";

render(
  <Router history={history}>
    <Provider store={store}>
      <Route path="/" component={App}/>
    </Provider>
  </Router>
, document.getElementById('root'));
