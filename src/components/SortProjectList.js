import React, { Component } from 'react'
import Project from './Project'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


// Apollo handles sending mutation to server
// define the mutation and wrap your component 
// with the graphql container 
// (tagged template literal - a function that is passed as a parsed string)
const RAW_PROJECT_LIST_QUERY = gql`
 {
    projects{
        id
        project_name
        project_year
        film_project
        avi_roles_on_project{
        avi_director 
        avi_gaffer 
        avi_cinematographer 
        avi_writer 
        avi_camera_operator 
        avi_lighting_technician 
        avi_front_end_dev 
        avi_back_end_dev 
        avi_full_stack_dev
        }
        project_media{
        banner_image_url
        video_url
        }
        project_category{
        short_film
        feature_film
        }
    }   
}
`

/*

*/ 



class SortProjectList extends Component {
// Set initial component state
// default values that will be sent
// to project component for rendition
    state = {
        project_properties_to_render: [
            "avi_gaffer",
            "project_name",
            "project_year"
        ],
        available_project_properties: [
            "film_project",
            "avi_director",
            "avi_gaffer",
            "avi_cinematographer",
            "avi_writer",
            "avi_camera_operator",
            "avi_lighting_technician",
            "avi_front_end_dev",
            "avi_back_end_dev",
            "avi_full_stack_dev",
            "short_film",
            "feature_film",
            "banner_image_url",
            "video_url"
        ]
    };

  
    project_property_handler = event => {
    const name = event.target.name;
    
    // search whether the property name is not in the array (position returned <0)
    // if absent, add it; if present, remove it
    this.setState( (state) => {  
        if (state.project_properties_to_render.indexOf(name)<0){
            state.project_properties_to_render.push(name)
            return
        } else {
            state.project_properties_to_render.pop(name)
            return
        }
    });
    };







    update_view_handler = event => {
        console.log("button clicked")
    }


    render() {
        // Query component provides us with
        // "render prop function"
        // which is why ProjectsToRender is 
        // returned as a function result
        // it is returned from server call
        return (
        <div>
            <Query query = {RAW_PROJECT_LIST_QUERY}>
                { ({ loading, error, data }) => {
                // above data object is returned from the gql query result
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>
                
                    const cleanedDataPayload = []

                    // Reformat the data payload into something more palatable 
                    for (let i=0; i<data.projects.length; i++){
                        cleanedDataPayload[i]={}
                        cleanedDataPayload[i]["id"]=data.projects[i].id;
                        cleanedDataPayload[i]["project_name"]=data.projects[i].project_name;
                        cleanedDataPayload[i]["project_year"]=data.projects[i].project_year;
                        cleanedDataPayload[i]["film_project"]=data.projects[i].film_project;
                        let avi_roles = data.projects[i].avi_roles_on_project
                        let roles = []
                        for (let key in avi_roles){
                            if (avi_roles[key] === true){
                                roles.push(key)
                            }    
                        }
                        cleanedDataPayload[i]["avi_roles_on_project"]=roles;
                    }

                    const ProjectsToRender = []

        
                    //  For each element specified as a project property of interest
                    //  if the project has a matching role
                    //  then return that item            
                        for (const project in cleanedDataPayload){
                                for (let i = 0; i < cleanedDataPayload[project].avi_roles_on_project.length; i++){
                                    if (this.state.project_properties_to_render.includes( // array of properties of interest
                                        cleanedDataPayload[project].avi_roles_on_project[i])){ // array of avi roles on project 
                                            ProjectsToRender.push(cleanedDataPayload[project])
                                        } 
                                }
                        }
                    
                           
                    console.log(ProjectsToRender)    
                        
                    return (
                        <div>
                        {ProjectsToRender.map(project => 
                            <Project key={project.id}
                                     project={project}
                                     project_properties_to_render={this.state.project_properties_to_render} 
                            />
                        )}
                        </div>
                    )
                    }
                }
            </Query>
            
            {/* Create tickboxes for all properties in array
                declared above */}
            <div>
                <div className="flex flex-column mt3">
                {this.state.available_project_properties.map (property =>
                    <label
                    key={property}
                    >
                        {property}
                        <input
                        className="mb2"
                        value={property}
                        name={property}
                        onChange={this.project_property_handler}
                        type="checkbox"
                        />
                    </label>
                )}
                </div>
            </div>

            <button 
                className="pointer button"
                onClick= {this.update_view_handler}
            >
                Update view
            </button>

        </div>


        )
      }
    }
    



            
                
        

export default SortProjectList




// <div>
