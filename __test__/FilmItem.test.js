import React from 'react';
import { mount, shallow } from 'enzyme';
import { Link, BrowserRouter } from 'react-router-dom'
import FilmItem from '../src/components/film-item/FilmItem';

import data from './mockData'
import store from '../src/store'

describe('FilmItem', () => {
  let filmItem;

  beforeAll(() => {
    filmItem = mount(
      <FilmItem filmData={data.results[0]}/>
    );
  })

  it('has correct title', () => {

    expect(filmItem.find('div > div').first().children().first().text())
        .toEqual('Interstellar');
  });

  it('has correct raiting', () => {

    expect(filmItem.find('div > div').first().children().last().text())
        .toEqual('Raiting: 8.1');
  });

  it('img has correct src', () => {

    expect(filmItem.find('img').props().src)
      .toEqual('https://image.tmdb.org/t/p/w500/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg');
  });

  it('has correct release date', () => {

    expect(filmItem.find('div').last().text())
      .toEqual('2014-11-05');
  });
})
