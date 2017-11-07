import React from 'react';
import { mount, shallow } from 'enzyme';
import { Link, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import InfoRow from '../src/components/info-row/InfoRow';

import store from '../src/store'

describe('InfoRow', () => {
  let infoRow;

  beforeAll(() => {
    infoRow = mount(
      <Provider store={store}>
        <InfoRow/>
      </Provider>
    );
  })

  it('No movies found on init state', () => {

    expect(infoRow.find('span').first().text())
      .toEqual('No movies found');
  });

  it('has correct initial sort type', () => {
    expect(infoRow.find('span').last().props().className)
    .toMatch(/button/);
  });

  it('switch to raiting sort method', () => {
    infoRow.find('span').last().simulate('click')

    expect(infoRow.find('span').last().props().className)
      .toMatch(/active/);
  });

})
