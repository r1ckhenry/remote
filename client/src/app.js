import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import store from "./store.js"

import Control from "./scenes/control.jsx";
import Watch from "./scenes/watch.jsx";

const initialRender = () => {
  ReactDOM.render(
    <Provider store={ store }>
      <Router>
        <div>
          <Route path="/watch" component={ Watch }/>
          <Route path="/control" component={ Control }/>
        </div>
      </Router>
    </Provider>,
    document.getElementById( "app" )
  )
}

initialRender();
