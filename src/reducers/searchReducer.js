export default function reducer(
  state = {
    searchParams: ''
  }, action) {
  switch (action.type) {
    case "CHANGE_SEARCH": {
      return {
        ...state,
        searchParams: action.payload
      }
    }
  }
  return state;
}
