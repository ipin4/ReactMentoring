import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import { fetchById } from "../../actions/actions.js"

import cl from './FilmHeaderStyles';
import TypicalButton from '../typical-button/TypicalButton';

class FilmHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sortBy: 'year', filmId: '' };
    this.toOneLine = this.toOneLine.bind(this);
  };

  toOneLine(data) {
    return data.map(item => item.name).join(', ');
  }

  render() {
    const { filmData } = this.props;
    const { params } = this.props.match;

    if (params.data !== this.state.filmId) {
      this.setState({filmId: params.data})
      this.props.fetchById(params);
    }
  
    return (
      <div className={cl.filmContainer + ' clearfix'}>
        <div className={cl.leftContainer}>
          <img
            className={cl.image} width="100%"
            src={filmData.poster_path ? 'https://image.tmdb.org/t/p/w500' +
              filmData.poster_path : '../../../data/noimage.png'}/>
        </div>
        <div className={cl.rightContainer}>
          <h2 className={cl.pinkText}>{filmData.original_name || filmData.original_title}</h2>
          <div>{`Status: ${filmData.status}`}</div>
          <div className={cl.whiteText}>{filmData.release_date || filmData.first_air_date || 'NO DATA'}</div>
          <div className={cl.whiteText}>{filmData.runtime + ' min'}</div>
          <div>{filmData.overview}</div>
          <div className={cl.smallText}>Genres:
            <br/>{filmData.genres ? this.toOneLine(filmData.genres): 'No Data'}
          </div>
          <div className={cl.smallText}>Production Companies:
            <br/>{filmData.production_companies ?
              this.toOneLine(filmData.production_companies) : 'No Data'}
          </div>
        </div>
        <div className={cl.button}>
          <Link to={'/search'}>
            <TypicalButton type="searchBack" name="SEARCH"/>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    filmData: state.fetchByIdReducer.filmData,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchById: (data, itemType) =>
      dispatch(fetchById(data, itemType))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmHeader)