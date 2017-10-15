export default function reducer(
  state = {
    fetching: false,
    filmData: {}
  }, action) {
  switch (action.type) {
    case "START_FETCH_BY_ID": {
      return {...state, fetching: true}
    }
    case "FETCH_FILM_DATA": {
      return {
        ...state,
        fetching: false,
        filmData: action.payload
      }
    }
    case "FETCH_FILM_DATA_ERROR": {
      return {
        ...state,
        fetching: false,
        filmData: action.payload
      }
    }
  }
  return state;
}
