import React from 'react';
import classNames from './TypicalButtonStyles.js'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.changeView = this.changeView.bind(this);
  };
  changeView() {
    if (this.props.type == 'searchBack') {
      this.props.switchView();
    }
  };
  render() {
    let activeClass = '';
    let buttonClass = '';
    if (this.props.active) {
      activeClass=classNames.active;
    }
    this.props.type=="typical" ? buttonClass=classNames.typical : buttonClass=classNames.search;
    if (this.props.type=="searchBack") {buttonClass=classNames.searchBack}
    return (<button onClick={this.changeView}
                    className={classNames.default + ' ' + buttonClass + ' ' + activeClass}>
            {this.props.name}</button>);
  }
}