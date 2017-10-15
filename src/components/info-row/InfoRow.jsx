import React from 'react';
import { Link, Route } from 'react-router-dom'

import { changeSortType } from '../actions/actions.js'
import cl from './InfoRowStyles'
import netflixAPI from '../../api'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
    this.triggerSort = this.triggerSort.bind(this);
  };
  triggerSort(e) {
    let sortBy;
    if (e.target.innerHTML == 'release date') {
      sortBy = 'year';
      this.setState({ active: true });
    } else {
      sortBy = 'raiting';
      this.setState({ active: false });
    }
    changeSortType(sortBy)(this.props.store);
  }
  render() {
    const self = this;
    const films = this.props.films;
    const searchParams = this.props.searchParams;
    let style = {
      true: {
        color: 'rgb(245,82,99)'
      },
      false: {
        color: 'black'
      }
    }
    return (
    <div className={cl.infoRow}>
      { searchParams || films.length && films[0].id ?
          this.props.isRelated ?
            <span>Similar movies: {films.length}</span> :
            <span>{films.length} movies found</span> :
        <span>No movies found</span>
      }
      
      <div className={cl.rightRow}>
        <span>Sort by: </span>
          <span style={style[this.state.active]} className={cl.buttons}
                onClick={this.triggerSort}>release date</span>
          <span style={style[!this.state.active]} className={cl.buttons}
                onClick={this.triggerSort}>raiting</span>
      </div>
    </div>);
  }
}