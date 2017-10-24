import React, { PropTypes, Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom'

import { fetchData, fetchRecom } from '../../actions/actions.js'

import netflixAPI from '../../api'

import InfoRow from '../info-row/InfoRow'
import FilmItem from '../film-item/FilmItem'

import cl from './ContentStyles'
import filmCl from '../film-item/FilmItemStyles'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParams: '',
      itemType: ''
    };
    this.sortCollection = this.sortCollection.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.sendRecomRequest = this.sendRecomRequest.bind(this);
  };
  sortCollection(store) {
    if (store.sortBy == 'year') {
      store.content.films.sort(function (a, b) {
        const itemA = a.release_date || a.first_air_date || '0';
        const itemB = b.release_date || b.first_air_date || '0';
        return itemB.replace(/-/g, '')
          - itemA.replace(/-/g, '');
      });
    } else {
      store.content.films.sort(function (a, b) {
        return b.vote_average - a.vote_average;
      });
    }
  };
  sendRequest(searchParams, itemType, store) {
    const data = searchParams
      .replace(/\s/ig, "%20");
    fetchData(data, itemType)(store)
  }
  sendRecomRequest(searchParams, itemType, store) {
    fetchRecom(searchParams, itemType)(store);
  }
  render() {
    const { store } = this.props;
    const films = store.content.films;
    let searchParams;
    let itemType;
    let isRelated;
    if (store.location.search) {
      searchParams = store.location.search.replace('?', '');
      itemType = store.location.hash.replace('#', '');
      isRelated = false;
    } else {
      const locationData =
        store.location.pathname.replace('/film/','').split('/')
      searchParams = locationData[0];
      itemType = locationData[1];
      isRelated = true;
    }
    
    if (searchParams !== this.state.searchParams ||
        itemType !== this.state.itemType) {
      this.setState({
        searchParams: searchParams,
        itemType: itemType
      })
      if (store.location.search) {
        this.sendRequest(searchParams, itemType, store);
      } else {
        this.sendRecomRequest(searchParams, itemType, store);
      }
    }
    this.sortCollection(store);
    return (
      <div>
        <InfoRow films={films}
                 sortBy={this.state.sortBy}
                 store={store}
                 searchParams = {searchParams}
                 isRelated={isRelated}/>
        <div className={cl.boxContainer}>
          {searchParams || films.length && films[0].id ?
            films.map((item, index) =>
              <Link to={`/film/${item.id}/${itemType}`}>
                <div className={filmCl.container}>
                  <FilmItem filmData={item}/>
                </div>
              </Link>
            ) : <div></div>
          }
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  films: PropTypes.object.isRequired
}
