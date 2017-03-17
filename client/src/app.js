import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/index';

import ControlContainer from "./ControlContainer.jsx";

const store = createStore( reducer );

ReactDOM.render(
  <Provider store={ store }>
    <ControlContainer />
  </Provider>,
  document.getElementById( "app" )
)
