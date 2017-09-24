import React from 'react';
import classNames from './SearchStyles.js'
import TypicalButton from '../typical-button/TypicalButton.jsx'

export default class Header extends React.Component {
  render() {
    let style = {
      parent: {}
    }
    this.props.is == 'Search' ? style.parent.display = 'block' : style.parent.display = 'none';
    return (
    <div style={style.parent}>
      <h4>FIND YOUR MOVIE</h4>
      <input className={classNames.input} type="text"/>
      <div className={classNames.searchBy}>
        <span>SEARCH BY</span> 
        <TypicalButton type="typical" 
                       name="TITLE" 
                       active="true"></TypicalButton>
        <TypicalButton type="typical" 
                       name="DIRECTOR" 
                       active=""></TypicalButton>
      </div>
      <div className={classNames.search}>
        <TypicalButton type="search" 
                       name="SEARCH"></TypicalButton>
      </div>
    </div>);
  }
}