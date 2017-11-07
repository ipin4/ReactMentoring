import fetchByIdReducer from '../src/reducers/fetchByIdReducer';
import fetchReducer from '../src/reducers/fetchReducer';
import searchReducer from '../src/reducers/searchReducer';
import sortReducer from '../src/reducers/sortReducer';

describe('fetchByIdReducer', () => {

  it('should return the initial state', () => {
    const initState = {
      fetching: false,
      filmData: {}
    }
    expect(fetchByIdReducer(undefined, {})).toEqual(initState);
  });

  it('should handle FETCH_FILM_DATA and return correct data', () => {
    const successAction = {
      type: 'FETCH_FILM_DATA',
      payload: 'data',
    }
    const response = {"fetching": false, "filmData": "data"}
    expect(fetchByIdReducer({}, successAction)).toEqual(response);
  });
})

describe('fetchReducer', () => {

  it('should return the initial state', () => {
    const initState = {
      fetching: false,
      films:[{}]
    }
    expect(fetchReducer(undefined, {})).toEqual(initState);
  });

  it('should handle FETCH_FILMS and return correct data', () => {
    const successAction = {
      type: 'FETCH_FILMS',
      payload: 'data',
    }
    const response = {"fetching": false, "films": "data"}
    expect(fetchReducer({}, successAction)).toEqual(response);
  });
})

describe('searchReducer', () => {

  it('should return the initial state', () => {
    const initState = {
      searchParams: ''
    }
    expect(searchReducer(undefined, {})).toEqual(initState);
  });

  it('should handle CHANGE_SEARCH and return correct data', () => {
    const successAction = {
      type: 'CHANGE_SEARCH',
      payload: 'data',
    }
    const response = {"searchParams": "data"}
    expect(searchReducer({}, successAction)).toEqual(response);
  });
})

describe('sortReducer', () => {

  it('should return the initial state', () => {
    const initState = {
      sortBy: 'year'
    }
    expect(sortReducer(undefined, {})).toEqual(initState);
  });

  it('should handle CHANGE_SORT and return correct data', () => {
    const successAction = {
      type: 'CHANGE_SORT',
      payload: 'raiting',
    }
    const response = {"sortBy": "raiting"}
    expect(sortReducer({}, successAction)).toEqual(response);
  });
})
