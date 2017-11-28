import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import cl from './Search.css'
import TypicalButton from '../typical-button/TypicalButton'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchBy: 'movie', searchValue: '' };
    this.searchType = this.searchType.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.clearInput = this.clearInput.bind(this);
  };
  searchType(nameButton) {
    nameButton == 'movies' ?
      this.setState({ searchBy: 'movie' }) :
      this.setState({ searchBy: 'tv' })
  }
  changeValue(e) {
    this.setState({ searchValue: e.target.value });
  }
  clearInput() {
    this.setState({ searchValue: '' })
  }
  render() {
    return (
    <div>
      <h4>FIND YOUR MOVIE</h4>
      <input className={cl.input} type="text"
        value={this.state.searchValue}
        onChange={this.changeValue}
        onClick={this.clearInput}/>
      <div className={cl.searchBy}>
        <span>SEARCH BY</span>
        <TypicalButton type="typical" name="Movies"
          active={this.state.searchBy == 'movie'}
          searchType={this.searchType}/>
        <TypicalButton type="typical" name="TV Shows"
          active={this.state.searchBy == 'tv'}
          searchType={this.searchType}/>
      </div>
      <div className={cl.toRight}>
        { this.state.searchValue ?
          <Link to={`/search/${this.state.searchValue.toLowerCase()}/${this.state.searchBy}`}>
            <TypicalButton type="search" name="SEARCH"/>
          </Link> : <TypicalButton type="searchDisable" name="SEARCH"/> }
      </div>
    </div>);
  }
}