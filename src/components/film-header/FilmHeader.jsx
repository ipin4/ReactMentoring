import React from 'react';
import classNames from './FilmHeaderStyles.js'
import TypicalButton from '../typical-button/TypicalButton.jsx'

export default class Header extends React.Component {
  render() {
    let filmInfo = this.props.item;
    let style = {
      parent: {}
    }
    this.props.is == 'FilmHeader' ? style.parent.display = 'block' : style.parent.display = 'none';
    return (
    <div style={style.parent} className={classNames.filmContainer + ' clearfix'}>
      <img className={classNames.image} width="30%" height="350px" src={'../../../data/' + filmInfo.img}/>
      <div className={classNames.rightContainer}>
        <h2 className={classNames.pinkText}>{filmInfo.name}</h2>
        <div>{filmInfo.oskar}</div>
        <div className={classNames.whiteText}>{filmInfo.year}</div>
        <div className={classNames.whiteText}>{filmInfo.duration + ' min'}</div>
        <div>{filmInfo.description}</div>
        <div className={classNames.smallText}>{filmInfo.director}</div>
        <div className={classNames.smallText}>{'Cast: ' + filmInfo.cast}</div>
      </div>
      <div className={classNames.button}>
        <TypicalButton type="searchBack" 
                       name="SEARCH" 
                       switchView={this.props.switchView}></TypicalButton>
      </div>
    </div>);
  }
}