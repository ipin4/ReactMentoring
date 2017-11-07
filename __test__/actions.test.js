import * as actions from '../src/actions/actions';
import mockData from './mockData';
import mockFilmData from './mockFilmData'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('actions', () => {

  it('fetchFilms', (done) => {
    let state = {
      fetching: false,
      films:[{}]
    }
    const mockStore = configureStore([thunk]);
    const store = mockStore(state);
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve) => {
        resolve({
          json: () => { return {results: 'value'} }
        });
      });
    })
    store.dispatch(actions.fetchFilms()).then(() => {
      expect(store.getActions()).toEqual([{ type: 'FETCH_FILMS', payload: 'value' }]);
      done();
    });
  });

  it('fetchById', (done) => {
    let state = {
      fetching: false,
      filmData: {}
    }
    const mockStore = configureStore([thunk]);
    const store = mockStore(state);
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve) => {
        resolve({
          json: () => 'value'
        });
      });
    })
    store.dispatch(actions.fetchById({itemType: 'movie'})).then(() => {
      expect(store.getActions()).toEqual([{ type: 'FETCH_FILM_DATA', payload: 'value' }]);
      done();
    });
  });

  it('changeSortType', () => {
    expect(actions.changeSortType('years'))
      .toEqual({ type:'CHANGE_SORT', payload: 'years' })
  });

});
