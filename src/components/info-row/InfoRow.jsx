import React from 'react';
import { Link, Route } from 'react-router-dom'
import cl from './InfoRowStyles'
import netflixAPI from '../../api'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
    this.triggerSort = this.triggerSort.bind(this);
  };
  triggerSort(e) {
    let sortBy;
    if (e.target.innerHTML == 'release date') {
      sortBy = 'year';
      this.setState({ active: true });
    } else {
      sortBy = 'raiting';
      this.setState({ active: false });
    }
    this.props.sortCollection.call(this, sortBy);
  }
  render() {
    const self = this;
    let style = {
      true: {
        color: 'rgb(245,82,99)'
      },
      false: {
        color: 'black'
      }
    }
    return (
    <div className={cl.infoRow}>
      <span>{this.props.itemsLength} movies found</span>
      <div className={cl.rightRow}>
        <span>Sort by: </span>
          <span style={style[this.state.active]} className={cl.buttons}
                onClick={this.triggerSort}>release date</span>
          <span style={style[!this.state.active]} className={cl.buttons}
                onClick={this.triggerSort}>raiting</span>
      </div>
    </div>);
  }
}