'use strict';

import { combineReducers } from "redux";

import userInfo from "./userInfoReducer";

// This is the top level shape of our redux state.  Add more as necessary.
// The convention is to match the reducer name to the state field name.
export default combineReducers({
  userInfo,
})
