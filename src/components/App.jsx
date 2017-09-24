import React from 'react';
import Header from './header/Header.jsx';
import InfoRow from './info-row/InfoRow.jsx'
import FilmItem from './film-item/FilmItem.jsx'

import commonClassNames from './AppStyles.js'
import headerClass from './header/HeaderStyles.js'
import filmClassNames from './film-item/FilmItemStyles.js'

let data = [{
  name: 'one',
  genre: 'some genre',
  year: 1990,
  duration: 154,
  description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  director: 'Quentin Tarantino',
  cast: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  img: '1.png',
  oskar: 'Oskar-winning movies'
}, {
  name: 'two',
  genre: 'dfdsfsd genre',
  year: 2018,
  duration: 154,
  description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  director: 'Tarantino',
  cast: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  img: '1.png',
  oskar: 'Oskar-winning movies'
}, {
  name: 'three',
  genre: 'rgeraf genre',
  year: 2014,
  duration: 154,
  description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  director: 'Quentin',
  cast: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  img: '1.png',
  oskar: 'Oskar-winning movies'
}];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPan: 'Search',
      selectFilm: data[0]
    };
  };
  getItem(item) {
    this.setState({
      selectedPan: 'FilmHeader',
      selectFilm: item,
    });
  };
  render() {
    return (
      <div className={commonClassNames.common}>
        <Header selectedItem={this.state.selectFilm} 
                selectedView={this.state.selectedPan} 
                action={this.switchToSearch}></Header>
        <InfoRow itemsLength={data.length}></InfoRow>
        <div className={commonClassNames.boxContainer}>
          {data.map((item, index) => 
            <div className={filmClassNames.container}
                 onClick={this.getItem.bind(this, item)}>
              <FilmItem filmData={item}></FilmItem>
            </div>)}
        </div>
        <div className={commonClassNames.footer}>
          <span className={headerClass.spanColor}>netflixroulette</span>
        </div>
      </div>);
  };
}