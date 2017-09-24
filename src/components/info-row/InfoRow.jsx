import React from 'react';
import classNames from './InfoRowStyles.js'

export default class Header extends React.Component {
  render() {
    let activeClass = '';
    return (
    <div className={classNames.infoRow}>
      <span>{this.props.itemsLength} movies found</span>
      <div className={classNames.rightRow}>
        <span>Soret by: </span>
        <span className={classNames.buttons + ' '}>release date</span>
        <span className={classNames.buttons + ' ' + classNames.active}>raiting</span>
      </div>
    </div>);
  }
}