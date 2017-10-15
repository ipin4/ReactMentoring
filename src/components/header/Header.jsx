import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import netflixAPI from '../../api'
import cl from './HeaderStyles'

import Search from '../search/Search'
import FilmHeader from '../film-header/FilmHeader'

export default class Header extends Component {
  render() {

    return (
    <div className={cl.headerContainer}>
      <span className={cl.spanColor}>netflixroulette</span>
      <div className={cl.blockContainer}>
        <Switch>
          <Route path={"/search/"} component={Search}/>
          <Route path={"/film/:name/:type"}>
            <FilmHeader store={this.props.store}/>
          </Route>  
          <Redirect from="/" to="/search/"/>
        </Switch>
      </div>
    </div>);
  }
}