export default function reducer(
  state = {
    sortBy: 'year'
  }, action) {
  switch (action.type) {
    case "CHANGE_SORT": {
      return {
        ...state,
        sortBy: action.payload
      }
    }
  }
  return state;
}
