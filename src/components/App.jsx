import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';
import InfoRow from './info-row/InfoRow';

import comCl from './AppStyles';

export default withRouter(() =>
  <div className={comCl.common}>
    <Header/>
    <Route path={"/:page"} component={InfoRow}/>
    <Route path="/:page/:data/:itemType" component={Content}/>
    <Footer/>
  </div>
);

