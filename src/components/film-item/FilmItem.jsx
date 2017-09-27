import React from 'react';
import cl from './FilmItemStyles.js'

export default class Header extends React.Component {
  render() {
    let filmInfo = this.props.filmData;
    return (<div>
      <img className={cl.image} 
           width="100%" 
           height="250px" 
           src={'../../../data/' + filmInfo.img}/>
      <div className={cl.leftBox}>
        <div className={cl.name}>{filmInfo.name}</div>
        <div className={cl.genre}>{filmInfo.genre}</div>
      </div>
      <span className={cl.year}>{filmInfo.year}</span>
    </div>);
  }
}