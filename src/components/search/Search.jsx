import React from 'react';
import { Link } from 'react-router-dom'
import cl from './SearchStyles'
import TypicalButton from '../typical-button/TypicalButton'
import netflixAPI from '../../api'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      searchBy: 'name',
      searchValue: ''
    };
    this.searchType = this.searchType.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.clearInput = this.clearInput.bind(this);
  };
  searchType(nameButton) {
    if (nameButton == 'title') {
      this.setState({
        active: true,
        searchBy: 'name'
      });
    } else {
      this.setState({ 
        active: false,
        searchBy: 'director'
      })
    }
  }
  changeValue(e) {
    this.setState({
      searchValue: e.target.value
    });
  }
  clearInput() {
    this.setState({
      searchValue: ''
    })
  }
  render() {
    return (
    <div>
      <h4>FIND YOUR MOVIE</h4>
      <input className={cl.input}
             type="text"
             value={this.state.searchValue}
             onChange={this.changeValue}
             onClick={this.clearInput}/>
      <div className={cl.searchBy}>
        <span>SEARCH BY</span>
        <TypicalButton type="typical"
                       name="TITLE"
                       active={this.state.active}
                       searchType={this.searchType}></TypicalButton>
        <TypicalButton type="typical"
                       name="DIRECTOR"
                       active={!this.state.active}
                       searchType={this.searchType}></TypicalButton>
      </div>
      <div className={cl.search}>
        <Link to={{pathname: `/search/`,
                   search: `${this.state.searchBy}=${this.state.searchValue}`}}>
          <TypicalButton type="search" name="SEARCH"></TypicalButton>
        </Link>
      </div>
    </div>);
  }
}