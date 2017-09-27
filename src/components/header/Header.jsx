import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import netflixAPI from '../../api'
import cl from './HeaderStyles'

import Search from '../search/Search'
import FilmHeader from '../film-header/FilmHeader'

export default class Header extends React.Component {
  render() {
    return (
    <div className={cl.headerContainer}>
      <span className={cl.spanColor}>netflixroulette</span>
      <div className={cl.blockContainer}>
        <Switch>
          <Route path={"/search/"} render={(props) =>
            <Search {...props} ></Search>
          }/>
          <Route path={`/film/:name`} render={(props) =>
            <FilmHeader {...props} />
          }/>
          <Redirect from="/" to="/search/"/>
        </Switch>
      </div>
    </div>);
  }
}