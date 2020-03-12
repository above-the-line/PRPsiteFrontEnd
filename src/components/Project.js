import React, { Component } from 'react'


// The object properties are stated in the gql schema, 
// project_name is what is returned by the gql query 
// declared in ProjectList 
class Project extends Component {

  // LOGIC ABOUT RENDITION
  // let properties_to_render = this.props.project_poperties_to_render


  // recieve project_properties_to_render prop
  // iterate over all properties and build colums below

  // if the property is in the array of properties to render
  // then publish the items that satisfy that,
  // if not, do not show them

  // foreach this.props.project.avi_roles_on_project

  // console.log(Object.entries(this.props.project.avi_roles_on_project))

  render() {
    return (
      <div>
        <div>
          {this.props.project.project_name} ({this.props.project.project_year})
          <br></br>
        </div>
      </div>
    )
  }
}

export default Project





/*
      <div>
        <div>
          {this.props.project.project_name} ({this.props.project.project_year})
        </div>
          {this.props.project_properties_to_render.avi_gaffer===null 
            ? "" 
            : this.props.project.avi_roles_on_project.avi_gaffer
            ? <div> Avi was gaffer </div>
            : <div> Avi was NOT gaffer </div>
            }
        <br></br>
      </div>

*/ 
