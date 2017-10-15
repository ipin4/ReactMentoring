import React from 'react';
import { Link } from 'react-router-dom';

import { fetchById } from "../actions/actions.js"
import netflixAPI from '../../api'

import cl from './FilmHeaderStyles';
import TypicalButton from '../typical-button/TypicalButton';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'year',
      filmId: ''
    };
    this.sendRequest = this.sendRequest.bind(this);
  };
  sendRequest(path, itemType, store) {
    const data = path
      .replace(/\s/ig, "%20");
    fetchById(data, itemType)(store)
  }
  render() {
    const store = this.props.store;
    const locationData =
      store.location.pathname.replace('/film/','').split('/')
    const filmId = locationData[0];
    const itemType = locationData[1];
    let filmData = store.filmData;
    if (filmId !== this.state.filmId) {
      this.setState({filmId: filmId})
      this.sendRequest(filmId, itemType, store);
    }
    const genres = filmData.genres ?
      filmData.genres.map(item => ' ' + item.name) : '';

    const productionCompanies = filmData.production_companies ?
      filmData.production_companies.map(item => ' ' + item.name) : '';

    return (
    <div className={cl.filmContainer + ' clearfix'}>
      <img className={cl.image} width="30%" height="350px" 
           src={filmData.poster_path ? 'https://image.tmdb.org/t/p/w500' +
                filmData.poster_path : '../../../data/noimage.png'}/>
      <div className={cl.rightContainer}>
        <h2 className={cl.pinkText}>{filmData.original_name || filmData.original_title}</h2>
        <div>{`Status: ${filmData.status}`}</div>
        <div className={cl.whiteText}>{filmData.release_date || filmData.first_air_date || 'NO DATA'}</div>
        <div className={cl.whiteText}>{filmData.runtime + ' min'}</div>
        <div>{filmData.overview}</div>
        <div className={cl.smallText}>Genres:
          <br/>{genres}
        </div>
        <div className={cl.smallText}>Production Companies:
          <br/>{productionCompanies}
        </div>
      </div>
      <div className={cl.button}>
        <Link to={'/search/'}>
          <TypicalButton type="searchBack" 
                         name="SEARCH"></TypicalButton>
        </Link>
      </div>
    </div>);
  }
}