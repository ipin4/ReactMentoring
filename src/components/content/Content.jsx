import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom'
import netflixAPI from '../../api'

import InfoRow from '../info-row/InfoRow'
import FilmItem from '../film-item/FilmItem'

import cl from './ContentStyles'
import filmCl from '../film-item/FilmItemStyles'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmData: netflixAPI.getFirstData,
      sortBy: 'year'
    };
    this.sortCollection = this.sortCollection.bind(this);
    this.runSearch = this.runSearch.bind(this);

  };
  sortCollection(sortBy) {
    let sortArr = netflixAPI
      .sortCollection('number', sortBy, this.state.filmData);
    this.setState({
      filmData: sortArr,
      sortBy: sortBy
    });
  };
  runSearch(hash) {
    const searchParams = netflixAPI.parseParams(hash);
    return netflixAPI.searchInCollection(
      this.state.sortBy,
      'number',
      searchParams[0],
      searchParams[1]
    );
  }
  render() {
    const searchParams = this.props.location.search;
    let renderFilmData;
    if (searchParams) {
      renderFilmData = this.runSearch(searchParams);
    } else {
      renderFilmData = this.state.filmData;
    }
    return (
      <div>
        <InfoRow itemsLength={renderFilmData.length}
                   sortCollection={this.sortCollection}
                   sortBy={this.state.sortBy}/>
        <div className={cl.boxContainer}>
          {renderFilmData.map((item, index) =>
            <Link to={`/film/${item.name}`}>
              <div className={filmCl.container}>
                <FilmItem filmData={item}/>
              </div>
            </Link>
          )}
        </div>
      </div>
    );
  }
}