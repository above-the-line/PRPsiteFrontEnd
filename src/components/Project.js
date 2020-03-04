import React, { Component } from 'react'

// The object properties are stated in the gql schema, 
// project_name is what is returned by the gql query 
// declared in ProjectList 
class Project extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.project.project_name} ({this.props.project.project_year})
        </div>
      </div>
    )
  }
}

export default Project