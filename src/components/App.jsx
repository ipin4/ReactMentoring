import React, { Component } from 'react';
import { Link, Match, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

import netflixAPI from '../api';

import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';

import comCl from './AppStyles';
import css from '../default';

class App extends Component {
  render() {
    const store = this.props
    const { content } = this.props;
    return (
      <div className={comCl.common}>
        <Header store={store}/>
        <Route path="/search/:name">
          <Content store={store}/>
        </Route>
        <Footer></Footer>
      </div>
    );
  };
}

function mapStateToProps (state) {
  return {
    content: state.fetchReducer.content,
    filmData: state.fetchByIdReducer.filmData,
    sortBy: state.sortReducer.sortBy,
  }
}

export default connect(mapStateToProps)(App)