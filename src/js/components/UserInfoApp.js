'use strict';

import React, { PropTypes } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { Jumbotron } from "react-bootstrap"

import * as userInfoActions from "../actions/userInfoActions"
import UserInfoInput from "./UserInfoInput"
import UserInfoDisplayPanel from "./UserInfoDisplayPanel"

// Example of using inline style.
const loadingMessageStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  backgroundColor: "#000000",
  color: "#ffff00",
}

// TODO: Consider using a Higher-Order-Component (mixin?) for the AJAX loading message logic.

// This is the main "app", but as this project is a simple example, it's also the container for the other two components in the project.
export class UserInfoContainer extends React.Component {
  constructor(props) {
    super(props)

    // TODO: more on bind(this):  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
    // Or, Use the arrow function when defining the attribute itself, which also maintains the scope of "this", e.g., <Button onClick={ () => doClick() }>....
    this.getUserInfo = this.getUserInfo.bind(this)
  }

  componentWillMount() {
  }

  getUserInfo(username) {
    this.props.dispatch(userInfoActions.fetchUserInfo(username))
  }

  render() {

    return (
      <div>
        { this.props.isFetching ? <div style={loadingMessageStyle}>Loading...</div> : null }

        <Jumbotron>
          <h1>React Starter Template</h1>
          <p>With redux and fetch, and a working example that retrieves Github user information.</p>
          <p><a href="https://github.com/dusklight/react-redux-starter-template">https://github.com/dusklight/react-redux-starter-template</a></p>
        </Jumbotron>
        <UserInfoInput username={this.props.username} onGetUserInfo={this.getUserInfo} />
        <UserInfoDisplayPanel username={this.props.username} userInfo={this.props.userInfo} />
      </div>
    )
  }
}

// The mapStateToProps will be called whenever redux store updates.  It takes in the entire redux store, and returns an object to be
// passed as props to the component.  See official documentation for more info (https://github.com/reactjs/react-redux/blob/master/docs/api.md).
// "ownProps" parameter is the component's existing props not mapped through redux.  For example, if this component had a parent, props passed
// down from the parent to this component would be in ownProps.
// TODO: Also look into mapDispatchToProps, though the reason we don't use it is because we're dispatching from the components themselves using props.dispatch.
//  - Note that when you don't specify mapDispatchToProps, then props.dispatch is provided by Redux by default (http://redux.js.org/docs/faq/ReactRedux.html#react-props-dispatch)
const mapStateToProps = (reduxState, ownProps) => {
  return {
    username: reduxState.userInfo.data.username,
    userInfo: reduxState.userInfo.data.userInfo,
    isFetching: reduxState.userInfo.isFetching,
    isFetched: reduxState.userInfo.isFetched,
    isFetchFailed: reduxState.userInfo.isFetchFailed,
  }
}

const UserInfoApp = connect(mapStateToProps)(withRouter(UserInfoContainer))

export default UserInfoApp
