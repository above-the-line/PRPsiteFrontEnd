import React, { Component } from 'react'
import Project from './Project'

class SortProjectList extends Component {

    render() {
        return (
            <div>
                {this.props.projects.map(project =>
                    <Project key={project.id}
                            project={project}
                    />
                    )
                }
            </div>
        )
      }
    }

export default SortProjectList