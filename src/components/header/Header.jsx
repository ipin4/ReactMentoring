import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import cl from './HeaderStyles'

import Search from '../search/Search'
import FilmHeader from '../film-header/FilmHeader'

export default () =>
  <div className={cl.headerContainer}>
    <span className={cl.spanColor}>netflixroulette</span>
    <div className={cl.blockContainer}>
      <Switch>
        <Route
          path={"/search"} 
          component={Search}/>
        <Route 
          path={"/film/:data/:itemType"} 
          component={FilmHeader}/>
        <Redirect from="/" to="/search"/>
      </Switch>
    </div>
  </div>