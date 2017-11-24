import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import 'isomorphic-fetch';

import Header from './header/Header';
import Content from './content/Content';
import InfoRow from './info-row/InfoRow';
import Footer from './footer/Footer';
import routes from '../routes'

import styles from './App.css'

export default withRouter(() =>
  <div className={styles.common}>
    <Header/>
    <Route path={"/"} component={InfoRow}/>
    <Route path="/:page/:data/:itemType" component={Content}/>
    <Footer/>
  </div>
);

