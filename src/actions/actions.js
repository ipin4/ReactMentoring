const path = 'https://api.themoviedb.org/3/';
const key = 'api_key=e1b5752947f72bf59d881b313cb84177';

function fetchSeveralFilms(url, dispatch, howMuch) {
  fetch(url)
    .then(response => response.json())
    .then(response => {
      howMuch == 'several' ?
      dispatch(fetchFilmsSuccess(response)) :
      dispatch(fetchOneFilmDataSuccess(response));
    })
    .catch(errors => {
      howMuch == 'several' ?
      dispatch(fetchFilmsErrors(errors)) :
      dispatch(fetchOneFilmDataError(response));
    })
}

export function fetchFilms(data, itemType) {
  return dispatch => fetchSeveralFilms(
    `${path}search/${itemType}?${key}&query=${data}&page=1`,
    dispatch,
    'several')
}

export function fetchRecom(data, itemType) {
  return dispatch => fetchSeveralFilms(
    `${path + itemType}/${data}/similar?${key}&page=1`,
    dispatch,
    'several')
}

export function fetchById(params) {
  return dispatch => fetchSeveralFilms(
    `${path + params.itemType}/${params.data}?${key}`,
    dispatch,
    'one')
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
