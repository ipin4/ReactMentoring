import {combineReducers} from "redux";

import fetchReducer from "./fetchReducer";
import fetchByIdReducer from "./fetchByIdReducer";
import sortReducer from "./sortReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  fetchReducer,
  fetchByIdReducer,
  sortReducer,
  searchReducer
})
