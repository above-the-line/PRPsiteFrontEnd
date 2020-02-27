import React, { Component } from 'react'

class Project extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.project.name} ({this.props.project.year})
        </div>
      </div>
    )
  }
}

export default Project