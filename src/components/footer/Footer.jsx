import React from 'react';
import cl from './FooterStyles'
import headerCl from '../header/HeaderStyles'

export default class Header extends React.Component {
  render() {
    return (
      <div className={cl.footer}>
        <span className={headerCl.spanColor}>netflixroulette</span>
      </div>
    );
  }
}