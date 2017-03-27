import { createStore, combineReducers } from 'redux';

import { reducer as data } from "./data/reducer.js";

const appReducer = combineReducers({
  data
});

const store = createStore( appReducer );

export default store;
