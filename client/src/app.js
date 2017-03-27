import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import * as mediaActionCreators from "./data/media/actions.js"

import store from "./store.js"
import Media from "./scenes/media.jsx";

const initialRender = () => {
  ReactDOM.render(
    <Provider store={ store }>
      <Router>
        <Route path="/media" component={ Media }/>
      </Router>
    </Provider>,
    document.getElementById( "app" )
  )
}

mediaActionCreators.get()( store.dispatch );

initialRender();
