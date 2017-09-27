import React from 'react';
import { Link } from 'react-router-dom';
import netflixAPI from '../../api'

import cl from './FilmHeaderStyles';
import TypicalButton from '../typical-button/TypicalButton';

export default class Header extends React.Component {
  render() {
    let filmInfo = netflixAPI
      .getFirstItem(this.props.match.params.name);
    return (
    <div className={cl.filmContainer + ' clearfix'}>
      <img className={cl.image} width="30%" height="350px" 
           src={'../../../data/' + filmInfo.img}/>
      <div className={cl.rightContainer}>
        <h2 className={cl.pinkText}>{filmInfo.name}</h2>
        <div>{filmInfo.oskar}</div>
        <div className={cl.whiteText}>{filmInfo.year}</div>
        <div className={cl.whiteText}>{filmInfo.duration + ' min'}</div>
        <div>{filmInfo.description}</div>
        <div className={cl.smallText}>{filmInfo.director}</div>
        <div className={cl.smallText}>{'Cast: ' + filmInfo.cast}</div>
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