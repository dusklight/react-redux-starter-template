'use strict';

import React, { PropTypes } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"

import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap"

// This contains a text input control, and instead of using redux store for every input change, we'll use local component's state, because that's
// less "awkard" (https://github.com/reactjs/redux/issues/1287).
// Note that this is still a "controlled" component (vs "uncontrolled") (https://facebook.github.io/react/docs/uncontrolled-components.html).
export default class UserInfoInput extends React.Component {
  constructor(props) {
    super(props)

    // Initialize the local state here in the constructor, to make any changes later, call setState.
    this.state = {
      username: ""
    }

    this.handleGetUserInfo = this.handleGetUserInfo.bind(this)
    // Note that we're not doing the bind on handleUsernameInputChange - we don't need it since we're using arrow function in the render method.
  }

  // TODO: is handle*** naming convention the way to go?  Or, should we use on***? etc?  Do more research on react event naming convention.
  handleUsernameInputChange(evt) {
    this.setState ({
      username: evt.target.value
    })
  }

  handleGetUserInfo() {
    this.props.onGetUserInfo(this.state.username)
  }

  render() {
    // TODO: Create a new component that doesn't use react-bootstrap as another example.
    // TODO: Handle enter key from input and call the onGetUserInfo instead.
    // TOOD: Add validation for empty value submit.
    return (
      <Grid>
        <Row>
          <Col md={5}>
            <Form horizontal>
              <FormGroup controlId="userInfoInput">
                <Col md={2}>
                  <ControlLabel>Username:</ControlLabel>
                </Col>
                <Col md={10}>
                  <FormControl
                    type="text"
                    value={ this.state.username }
                    placeholder=""
                    onChange={ (evt) => this.handleUsernameInputChange(evt) }
                  />
                  <FormControl.Feedback />
                </Col>
              </FormGroup>
            </Form>
          </Col>
          <Col md={2}>
            <Button onClick={this.handleGetUserInfo}>Get User Info</Button>
          </Col>
        </Row>
      </Grid>
    )
  }
}
