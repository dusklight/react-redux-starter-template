'use strict';

import * as userInfoActions from "../actions/userInfoActions"

export default function userInfoReducer( state = {
    data: {
      // TODO: There ought to be a better way of initializing and keeping the state object shape consistent between reducers/actions/components.
      // We can also initialize the state in createStore call.
      username: null,
      userInfo: null,
      receivedAt: null
    },
    isFetching: false, // TODO: combine these three properties into one as an enum?
    isFetched: false,
    isFetchFailed: false,
    fetchError: null
},
action) {
  switch (action.type) {
    case userInfoActions.FETCH_USER_INFO_STARTED: {
      return { ...state, isFetching: true, isFetched: false, isFetchFailed: false, fetchError: null }
    }
    case userInfoActions.FETCH_USER_INFO_FAILED: {
      console.log("UserInfo fetch failed:", action.payload)
      return { ...state, isFetching: false, isFetched: false, isFetchFailed: true, fetchError: action.payload }
    }
    case userInfoActions.FETCH_USER_INFO_COMPLETED: {
      return {
        ...state,
        data: action.payload, // We're "grouping" the action.payload into a single data property, but we can also copy action.payload properties one by one.
        isFetching: false,
        isFetched: true,
        isFetchFailed: false,
        fetchError: null }
    }
    // Add other reducers related to UserInfo here.
  }

  return state
}
