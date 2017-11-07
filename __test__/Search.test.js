import React from 'react';
import { mount, configure } from 'enzyme';
import { BrowserRouter } from 'react-router-dom'
import Search from '../src/components/Search/Search';

describe('Search', () => {
  let search;

  beforeAll(() => {
    search = mount(
      <BrowserRouter><Search /></BrowserRouter>
    );
  })

  it('onchange set activite search button', () => {
    search.find('input').simulate('change', { target: {
      value: 'some_value' }
    });

    expect(search.find('Link').length).toEqual(1);
  });

  it('after onchange link have', () => {
    expect(search.find('Link').props().to).toEqual('/search/some_value/movie');
  });

  it('onclick delete searchValue and disable search button', () => {
    search.find('input').simulate('click');

    expect(search.find('Link').length).toEqual(0);
  });

})
