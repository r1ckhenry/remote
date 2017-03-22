import { createStore, combineReducers } from 'redux';

import { reducer as dataReducer } from "./data/reducer.js"

const appReducer = combineReducers({
  data: dataReducer
})

const store = createStore( appReducer );

export default store;
