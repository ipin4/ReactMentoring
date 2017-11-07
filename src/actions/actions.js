const path = 'https://api.themoviedb.org/3/';
const key = 'api_key=e1b5752947f72bf59d881b313cb84177';

export function fetchFilms(data, itemType) {
  const url = `${path}search/${itemType}?${key}&query=${data}&page=1`;
  return dispatch => fetch(url)
    .then(response => response.json())
    .then(response => dispatch(fetchFilmsSuccess(response)))
    .catch(errors => dispatch(fetchFilmsErrors(errors)))
}

export function fetchRecom(data, itemType) {
  const url = `${path + itemType}/${data}/similar?${key}&page=1`
  return dispatch => fetch(url)
    .then(response => response.json())
    .then(response => dispatch(fetchFilmsSuccess(response)))
    .catch(errors => dispatch(fetchFilmsErrors(errors)))
}

export function fetchById(params) {
  const url = `${path + params.itemType}/${params.data}?${key}`;
  return dispatch => fetch(url)
    .then(response => response.json())
    .then(response => dispatch(fetchOneFilmDataSuccess(response)))
    .catch(errors => dispatch(fetchOneFilmDataError(response)))
}

export function fetchFilmsSuccess(response) {
  return {
    type: 'FETCH_FILMS',
    payload: response.results
  }
}

export function fetchFilmsErrors(errors) {
  return {
    type: 'FETCH_FILMS_ERROR',
    payload: errors
  }
}

export function fetchOneFilmDataSuccess(response) {
  return {
    type:'FETCH_FILM_DATA',
    payload: response
  }
}

export function fetchOneFilmDataError(errors) {
  return {
    type:'FETCH_FILM_DATA_ERROR',
    payload: errors
  }
}

export const changeSortType = sortBy => {
  return {type:'CHANGE_SORT', payload:sortBy}
}
