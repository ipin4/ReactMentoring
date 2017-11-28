import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import 'isomorphic-fetch';


import Search from '../search/Search'
import FilmHeader from '../film-header/FilmHeader'
import routes from '../../routes'

import hdcl from './Header.css'

export default () =>
  <div className={hdcl.hdContainer}>
    <span className={hdcl.spanColor}>netflixroulette</span>
    <div className={hdcl.blockContainer}>
      <Switch>
        <Route
          path={"/film/:data/:itemType"} 
        component={FilmHeader}/>
        <Route
          path={"/"} 
          component={Search}/>
      </Switch>
    </div>
  </div>