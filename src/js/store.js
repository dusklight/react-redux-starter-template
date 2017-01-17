'use strict';

import { applyMiddleware, createStore, compose } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from "./reducers";

// Note that we are not passing in the initial state during createStore, because we are depending on each reducers to create their own initial state.
export default createStore(reducer, //initialState,
  compose(
    applyMiddleware(promise(), thunk, logger()), // TOOD: Find out if there's a dynamic way of applying the logger depending on the environment.
    window.devToolsExtension ? window.devToolsExtension() : f => f)
);
