import React from 'react';
import { Link, Route } from 'react-router-dom'
import { connect } from "react-redux";

import { changeSortType } from '../../actions/actions.js'
import cl from './InfoRow.css'

class InfoRow extends React.Component {
  render() {
    const { films, sortBy } = this.props;
    return (
      <div className={cl.infoRow}>
        {
          films.length && films[0].id &&
          this.props.location.pathname != '/search' ?
            this.props.match.params.page === 'film' ?
              <span>Similar movies: {films.length}</span> :
              <span>{films.length} movies found</span> :
          <span>No movies found</span> 
        }
        
        <div className={cl.rightRow}>
          <span>Sort by: </span>
          <span
            className={sortBy == 'year' ? cl.active : cl.buttons}
            onClick={this.props.changeSortType.bind(this, 'year')}>
            release date</span>
          <span
            className={sortBy == 'raiting' ? cl.active : cl.buttons}
            onClick={this.props.changeSortType.bind(this, 'raiting')}>
            raiting</span>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    sortBy: state.sortReducer.sortBy,
    films: state.fetchReducer.films,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeSortType: sortBy => {
      dispatch(changeSortType(sortBy))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoRow)