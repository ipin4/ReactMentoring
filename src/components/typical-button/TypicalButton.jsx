import React from 'react';
import cl from './TypicalButton.css'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.changeView = this.changeView.bind(this);
  };
  changeView() {
    const nameButton = this.props.name.toLowerCase();
    if (nameButton == 'movies' || nameButton == 'tv shows') {
      this.props.searchType(nameButton);
    }
  };
  render() {
    const activeClass = this.props.active ? cl.active : '';
    return <button
      onClick={this.changeView}
      className={cl.default + ' ' + cl[this.props.type] + ' ' + activeClass}>
      {this.props.name}</button>
  }
}