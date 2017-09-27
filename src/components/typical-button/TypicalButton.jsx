import React from 'react';
import cl from './TypicalButtonStyles'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.changeView = this.changeView.bind(this);
  };
  changeView() {
    const nameButton = this.props.name.toLowerCase();
    if (nameButton == 'title' || nameButton == 'director') {
      this.props.searchType(nameButton);
    }
  };
  render() {
    let activeClass = '';
    let buttonClass = '';
    if (this.props.active) {
      activeClass=cl.active;
    }
    this.props.type=="typical" ? buttonClass=cl.typical : buttonClass=cl.search;
    if (this.props.type=="searchBack") {buttonClass=cl.searchBack}
    return (<button onClick={this.changeView}
                    className={cl.default + ' ' + buttonClass + ' ' + activeClass}>
            {this.props.name}</button>);
  }
}