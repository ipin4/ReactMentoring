import React from 'react';
import { Link, Route } from 'react-router-dom'

import netflixAPI from '../api'

import Header from './header/Header';
import Content from './content/Content'
import Footer from './footer/Footer'

import comCl from './AppStyles'
import css from '../default';

export default class App extends React.Component {

  render() {
    return (
      <div className={comCl.common}>
        <Header updateSearchData={this.updateSearchData}/>
        <Route path={"/:name"} 
          render={(props) => <Content {...props}/>}
        />
        <Footer></Footer>
      </div>
    );
  };
}