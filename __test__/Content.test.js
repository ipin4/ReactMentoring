import React from 'react';
import { mount, shallow } from 'enzyme';
import { Link, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Content from '../src/components/content/Content';


import data from './mockData'
import store from '../src/store'

describe('Content', () => {
  let content;
  let match;

  beforeAll(() => {
    match = {
      params: {
        data: '',
        itemType: ''
      }
    }
    store.dispatch({
      type:'FETCH_FILMS',
      payload: data.results
    })
    content = mount(
      <BrowserRouter>
        <Provider store={store}>
          <Content match={match}/>
        </Provider>
      </BrowserRouter>
    );
  })

  it('render all recieved items', () => {

    expect(content.find('Link').length)
      .toEqual(10);
  });
})
