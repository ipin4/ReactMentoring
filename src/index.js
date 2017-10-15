import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  browserHistory,
  Route,
} from 'react-router-dom'

import App from './components/App';
import store from "./components/store.js";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Route path="/" component={App}/>
    </Provider>
  </Router>
, document.getElementById('root'));
