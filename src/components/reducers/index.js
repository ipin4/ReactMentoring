import {combineReducers} from "redux";

import fetchReducer from "./fetchReducer";
import fetchByIdReducer from "./fetchByIdReducer";
import sortReducer from "./sortReducer";

export default combineReducers({
  fetchReducer,
  fetchByIdReducer,
  sortReducer
})
