import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Header from './header/Header';
import Content from './content/Content';
import InfoRow from './info-row/InfoRow';
import Footer from './footer/Footer';

import styles from './App.css'

export default withRouter(() =>
  <div className={styles.common}>
    <Header/>
    <Route path={"/:page"} component={InfoRow}/>
    <Route path="/:page/:data/:itemType" component={Content}/>
    <Footer/>
  </div>
);

