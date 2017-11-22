import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import hdcl from './Header.css'

import Search from '../search/Search'
import FilmHeader from '../film-header/FilmHeader'

export default () =>
  <div className={hdcl.headerContainer}>
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