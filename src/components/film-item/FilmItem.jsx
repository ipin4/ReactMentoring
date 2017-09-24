import React from 'react';
import classNames from './FilmItemStyles.js'

export default class Header extends React.Component {
  render() {
    let filmInfo = this.props.filmData;
    return (<div>
      <img className={classNames.image} 
           width="100%" 
           height="250px" 
           src={'../../../data/' + filmInfo.img}/>
      <div className={classNames.leftBox}>
        <div className={classNames.name}>{filmInfo.name}</div>
        <div className={classNames.genre}>{filmInfo.genre}</div>
      </div>
      <span className={classNames.year}>{filmInfo.year}</span>
    </div>);
  }
}