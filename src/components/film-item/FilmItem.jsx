import React from 'react';
import cl from './FilmItem.css'

export default class Header extends React.Component {
  render() {
    const { filmData } = this.props;
    return (
      <div>
        <img
          className={cl.image}
          src={filmData.poster_path ? 'https://image.tmdb.org/t/p/w500' +
            filmData.poster_path : '../../../data/noimage.png'}/>
        <div className={cl.leftBox}>
          <div className={cl.name}>{filmData.original_name || filmData.original_title}</div>
          <div className={cl.genre}>Raiting: {filmData.vote_average}</div>
        </div>
        <div className={cl.year}>{filmData.release_date || filmData.first_air_date || 'NO DATA'}</div>
      </div>
    );
  }
}