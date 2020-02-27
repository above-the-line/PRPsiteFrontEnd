import React, { Component } from 'react'
import Project from './Project'



class ProjectList extends Component {
  render() {
    const ProjectsToRender = [
        // Mock data, each entry must have an id field
      {
        id: '1',
        name: 'The Good Daughter',
        year: '2020',
        url: 'https://www.prismagraphql.com',
      },
      {
        id: '2',
        name: 'The Feeling of Life',
        year: '2017',
        url: 'https://www.apollographql.com/docs/react/',
      },
    ]

    return (
      <div>{ProjectsToRender.map(
        // Sending these objects to props
        // You must specify an id, and then pass the entire project object
          project => <Project key={project.id}   project={project} /> 
          )}
      </div>
    )
  }
}

export default ProjectList