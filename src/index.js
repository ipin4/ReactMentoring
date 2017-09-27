import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import App from './components/App';

const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={history}>
    <App />
  </BrowserRouter>
, document.getElementById('root'));
