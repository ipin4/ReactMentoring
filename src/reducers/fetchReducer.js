export default function reducer(
  state = {
    content: {
      fetching: false,
      films:[{}]
    }
  }, action) {
  switch (action.type) {
    case "START_FETCH": {
      return {...state, fetching: true}
    }
    case "FETCH_FILMS": {
      return {
        ...state,
        content: {
          fetching: false,
          films: action.payload,
        }
      }
    }
    case "FETCH_FILMS_ERROR": {
      return {
        ...state,
        content: {
          fetching: false,
          films: action.payload
        }
      }
    }
  }
  return state;
}
