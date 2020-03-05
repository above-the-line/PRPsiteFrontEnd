import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Header extends Component {
  render() {
    return (
      <div className="flex pa1 justify-between nowrap orange">
        <div className="flex flex-fixed black">
          <div className="fw7 mr1">Play Right Productions</div>
          <Link to="/" className="ml1 no-underline black">
            Current Projects
          </Link>
          <div className="ml1">|</div>
          <Link to="/create" className="ml1 no-underline black">
            Create Project
          </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)