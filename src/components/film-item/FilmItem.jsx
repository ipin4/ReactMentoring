import React from 'react';
import cl from './FilmItemStyles.js'

export default class Header extends React.Component {
  render() {
    let filmInfo = this.props.filmData;
    return (<div>
      <img className={cl.image}
           width="100%"
           src={filmInfo.poster_path ? 'https://image.tmdb.org/t/p/w500' +
                filmInfo.poster_path : '../../../data/noimage.png'}/>
      <div className={cl.leftBox}>
        <div className={cl.name}>{filmInfo.original_name || filmInfo.original_title}</div>
        <div className={cl.genre}>Raiting: {filmInfo.vote_average}</div>
      </div>
      <span className={cl.year}>{filmInfo.release_date || filmInfo.first_air_date || 'NO DATA'}</span>
    </div>);
  }
}