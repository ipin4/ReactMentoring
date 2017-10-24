import axios from "axios";

const path = 'https://api.themoviedb.org/3/';
const key = 'api_key=e1b5752947f72bf59d881b313cb84177';

export function fetchData(data, itemType) {
  return function (store) {
    if (!data || !itemType) return;
    axios.get(`${path}search/${itemType}?${key}&${data}&page=1`)
      .then((response, error) => {
        store.dispatch({type:'FETCH_FILMS', payload:response.data.results});
      })
  }
}

export function fetchRecom(data, itemType) {
  return function (store) {
    if (!data || !itemType) return;
    axios.get(`${path + itemType}/${data}/similar?${key}&page=1`)
      .then((response, error) => {
        store.dispatch({type:'FETCH_FILMS', payload:response.data.results});
      })
  }
}

export function fetchById(data, itemType, store) {
  return function (store) {
    axios.get(`${path + itemType}/${data}?${key}`)
      .then((response, error) => {
        store.dispatch({type:'FETCH_FILM_DATA', payload:response.data});
      })
  }
}

export function changeSortType(sortBy) {
  const sort = sortBy;
  return function (store) {
    store.dispatch({type:'CHANGE_SORT', payload:sort})
  }
}
