import React from 'react';
import { mount } from 'enzyme';
import renderer from "react-test-renderer"
import TypicalButton from '../src/components/typical-button/TypicalButton';

describe('TypicalButton', () => {
  let button;
  const searchType = jest.fn();

  beforeAll(() => {
    button = mount(
      <TypicalButton type="typical" name="Movies" searchType={searchType}/>
    );
  })

  it('set equal name and class', () => {
    expect(button.text()).toEqual('Movies');
  });

  it('exec searchType by click', () => {
    button.find('button').simulate('click')
    expect(searchType).toBeCalled();
  })
})
