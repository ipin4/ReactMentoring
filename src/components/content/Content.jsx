import React, { PropTypes, Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom'

import { connect } from "react-redux";
import { fetchFilms, fetchRecom } from '../../actions/actions.js'

import FilmItem from '../film-item/FilmItem'
import cl from './Content.css'
import filmCl from '../film-item/FilmItem.css'

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {data: '', itemType: ''};
    this.sortCollection = this.sortCollection.bind(this);
  };

  sortCollection(sortBy, films) {
    if (!films) return;
    sortBy == 'year' ?
      films.sort((a, b) => {
        const itemA = a.release_date || a.first_air_date || '0';
        const itemB = b.release_date || b.first_air_date || '0';
        return itemB.replace(/-/g, '') - itemA.replace(/-/g, '');
      }) : films.sort((a, b) => b.vote_average - a.vote_average);
  };

  static fetchData(dispatch, match) {
    const { data, itemType, page } = match.params;
    if (page === 'search') {
      return dispatch(fetchFilms(data, itemType));
    } else {
      return dispatch(fetchRecom(data, itemType));
    }
  }

  componentDidMount() {
    const { data, itemType, page } = this.props.match.params;
    page === 'search' ?
        this.props.fetchFilms(data, itemType) :
        this.props.fetchRecom(data, itemType);
  }

  render() {
    const { films, sortBy, searchParams } = this.props;
    const { data, itemType, page } = this.props.match.params;
    if (data !== this.state.data || itemType !== this.state.itemType) {
      this.setState({ data: data, itemType: itemType });
      page === 'search' ?
        this.props.fetchFilms(data, itemType) :
        this.props.fetchRecom(data, itemType);
    }
    this.sortCollection(sortBy, films);
    return <div className={cl.boxContainer}>
      { !!films && films.length && films[0].id ?
        films.map((item, index) =>
          <Link key={item.id} to={`/film/${item.id}/${itemType}`}>
            <div className={filmCl.container}>
              <FilmItem filmData={item}/>
            </div>
          </Link>) : <div></div> }
    </div>
  }
}

function mapStateToProps (state) {
  return {
    films: state.fetchReducer.films,
    sortBy: state.sortReducer.sortBy,
    searchParams: state.searchReducer.searchParams
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchFilms: (data, itemType) =>
      dispatch(fetchFilms(data, itemType)),
    fetchRecom: (data, itemType) =>
      dispatch(fetchRecom(data, itemType))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);