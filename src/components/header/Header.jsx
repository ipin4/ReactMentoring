import React from 'react';
import classNames from './HeaderStyles.js'

import Search from '../search/Search.jsx'
import FilmHeader from '../film-header/FilmHeader.jsx'

export default class Header extends React.Component {
  switchToSearch() {
    this.props.selectedView = 'Search';
    this.forceUpdate()
  }
  render() {
    return (
    <div className={classNames.headerContainer}>
      <span className={classNames.spanColor}>netflixroulette</span>
      <div className={classNames.blockContainer}>
        <Search is={this.props.selectedView}></Search>
        <FilmHeader is={this.props.selectedView} 
                    item={this.props.selectedItem}
                    switchView={this.switchToSearch.bind(this)}></FilmHeader>
      </div>
    </div>);
  }
}