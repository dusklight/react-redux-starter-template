'use strict';

import React, { PropTypes } from "react"

import { Panel, Table } from "react-bootstrap";

// This is a stateless functional component, not requiring local state (and no custom logic when corresponding DOM node is created or destroyed).
const UserInfoDisplayPanel = ( {username, userInfo} ) => {

  if (username === null || userInfo === null) {
    // Don't render when there are no data, e.g., initial state before AJAX completes.
    return null
  }

  return (
    <Panel header={username}>
      <Table striped bordered condensed hover fill>
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {/* Note: we're adding key property to the tr, otherwise React will generate a warning (https://facebook.github.io/react/docs/lists-and-keys.html#keys) */}
          { Object.keys(userInfo).map ( key =>
            <tr key={key}>
              <td>
                { key }
              </td>
              <td>
                { userInfo[key] }
              </td>
            </tr>) }
        </tbody>
      </Table>

    </Panel>
  )
}

// An example of usig propTypes:
UserInfoDisplayPanel.propTypes = {
  username: PropTypes.string,  // If required: PropTypes.string.isRequired
  userInfo: PropTypes.object,
}

export default UserInfoDisplayPanel
