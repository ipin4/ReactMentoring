import React from 'react';
import { mount, shallow } from 'enzyme';
import { Link, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import FilmHeader from '../src/components/film-header/FilmHeader';


import filmData from './mockFilmData'
import store from '../src/store'

describe('FilmHeader', () => {
  let filmHeader;
  let match;
  const fetchById = jest.fn();
  beforeAll(() => {
    match = {
      params: {
        data: '',
      }
    }
    store.dispatch({
      type:'FETCH_FILM_DATA',
      payload: filmData
    })
    filmHeader = mount(
      <BrowserRouter>
        <Provider store={store}>
          <FilmHeader match={match} fetchById={fetchById}/>
        </Provider>
      </BrowserRouter>
    );
  })

  it('img has correct src', () => {

    expect(filmHeader.find('img').props().src)
      .toEqual('https://image.tmdb.org/t/p/w500/qquEFkFbQX1i8Bal260EgGCnZ0f.jpg');
  });

  it('render correct genres', () => {

    expect(filmHeader.find('div > br').parent().first().props().children[2])
      .toEqual('Comedy, Drama, Romance');
  });

  it('recive correct companies', () => {

    expect(filmHeader.find('div > br').parent().last().props().children[2])
      .toEqual('FilmNation Entertainment, Apatow Productions, Amazon Studios');
  });
})
