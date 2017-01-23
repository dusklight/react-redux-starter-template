'use strict';

 // We need polyfill to get Promises to work in IE 11.  Chrome and Firefox don't need this.  See also webpack.config.js on entry array.
import "babel-polyfill"

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, browserHistory } from "react-router"

import store from "./store";

import UserInfoApp from "./components/UserInfoApp";

// TODO: There are two routes, the second one for getting it to work with Github publishing.  Look into using git subtree (contrib).
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={UserInfoApp} />
      <Route path="/react-redux-starter-template/src/" component={UserInfoApp} />
    </Router>
  </Provider>,
  document.getElementById('app')
);


// Use this if you want to separate out the "Root" as a separate component.
// const Root = ({store}) => (
//   <Provider store={store}>
//     <Router history={browserHistory}>
//       <Route path='/' component={MainContainer} />
//     </Router>
//   </Provider>
// );
//
