'use strict';

// Using isomorphic-fetch, which is basically a wrapper around Github's whatwg-fetch, and node-fetch.  As per author's comment, consider using them
// separately. (https://github.com/matthew-andrews/isomorphic-fetch/issues/31#issuecomment-149668361)
import fetch from "isomorphic-fetch"

export const FETCH_USER_INFO_STARTED = "FETCH_USER_INFO_STARTED"
export const FETCH_USER_INFO_COMPLETED = "FETCH_USER_INFO_COMPLETED"
export const FETCH_USER_INFO_FAILED = "FETCH_USER_INFO_FAILED"

function fetchUserInfoStarted(username) {
  return {
    type: FETCH_USER_INFO_STARTED,
    payload: username
  }
}

function fetchUserInfoCompleted(username, json) {
  return {
    type: FETCH_USER_INFO_COMPLETED,
    payload: {
      username,
      userInfo: json,
      receivedAt: Date.now()
    }
  }
}

function fetchUserInfoFailed(err) {
  return {
    type: FETCH_USER_INFO_FAILED,
    payload: err
  }
}

// TODO: add example of using "init" object as a paramter when calling fetch.

export function fetchUserInfo(username) {
  // We're returning a function that redux-thunk middleware knows how to handle.
  // Using lambda here - same as: return function(dispatch)
  return dispatch => {

    dispatch(fetchUserInfoStarted());

    return fetch(`https://api.github.com/users/${username}`) // Using back-tick for template literals.
      .then(response => {
        // When a user is not found, it's coming back with 404 (with json message), but fetch does not consider 404 as an error, so we can check
        // status here if we want to handle it.
        console.log("response.status:", response.status)
        return response.json()
      })
      .then(json => {
        return dispatch(fetchUserInfoCompleted(username, json)) // TODO: do we need return here?
      })
      .catch(err => {
        // TODO: if some error occurs down the road while promise is executing, even not related to network, e.g., such as in a component, the
        // error will bubble up to here.
        console.log("fetchUserInfo - response error", err)
        return dispatch(fetchUserInfoFailed(err)) // TODO: do we need return here?
      });

  }
}
