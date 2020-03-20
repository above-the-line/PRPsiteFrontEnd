import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import SearchOptionsCheckboxes from './SearchOptionsCheckboxes'
import SortProjectList from './SortProjectList';
import gql from 'graphql-tag'


// Apollo handles sending mutation to server
// define the mutation and wrap your component 
// with the graphql container 
// (tagged template literal - a function that is passed as a parsed string)
const FILTERED_GQL_QUERY = gql`
query ArbitraryNameForfilterProjectsByRole($rolesOfInterest: Avi_RolesCreateInput){
  filterProjectsByRole(where: $rolesOfInterest){
    id
    project_name
    project_year
    avi_roles_on_project{
        avi_gaffer
    }
  }
}
`



class ProjectListContainer extends Component {
    // Set initial component state
    // default values that will be sent
    // to projectList component for rendition
    constructor(props){
        super(props)
        this.state =  {
            gql_response: [
                {
                    "id": "5e5855bb799ab50007fd97f7",
                    "project_name": "Whistleblower",
                    "project_year": 2019,
                    "film_project": true,
                    "avi_roles_on_project": {
                    "avi_director": null,
                    "avi_gaffer": true,
                    "avi_cinematographer": true,
                    "avi_writer": true,
                    "avi_camera_operator": null,
                    "avi_lighting_technician": null,
                    "avi_front_end_dev": null,
                    "avi_back_end_dev": null,
                    "avi_full_stack_dev": null
                    }
                },
                {
                    "id": "5e59da6a799ab500073dc8f6",
                    "project_name": "Gegen die Wand",
                    "project_year": 2013,
                    "film_project": false,
                    "avi_roles_on_project": {
                      "avi_director": true,
                      "avi_gaffer": false,
                      "avi_cinematographer": false,
                      "avi_writer": null,
                      "avi_camera_operator": null,
                      "avi_lighting_technician": null,
                      "avi_front_end_dev": null,
                      "avi_back_end_dev": false,
                      "avi_full_stack_dev": null
                    },
                }
            ],
            project_properties_to_render: [],
            available_project_properties: [
                "avi_director",
                "avi_gaffer",
                "avi_cinematographer",
                "avi_writer",
                "avi_camera_operator",
                "avi_lighting_technician",
            ]
        }
        this.checkbox_click_handler = this.checkbox_click_handler.bind(this)
        this.executeSearch = this.executeSearch.bind(this)
    }
  

    // the withApollo function injects the ApolloClient instance created in index.js
    // into this component as a new prop called client. ( see below export default withApollo(Component) )
    // This client has a method called query that allows sending a query manually 
    // instead of using the graphql higher-order component.
    // 
    // When the user clicks a search option checkbox the event handler (defined below)
    // calls executeSearch function during setState
    executeSearch = async () => {
        const gql_vars = {
            rolesOfInterest: {}
        }
        this.state.project_properties_to_render.map(role => 
            gql_vars["rolesOfInterest"][role] = true)
        // keeps var names true to gql naming conventions
        // set up in backend
        const where = gql_vars
        const result = await this.props.client.query({
            query: FILTERED_GQL_QUERY,
            variables: where 
        })
        const payload = {"gql_response": result.data.filterProjectsByRole} 
        this.setState((state) => payload) 
    }



    // state hoisting for Props to display -- function passed as props to target child component
    checkbox_click_handler = event => {
        const name = event.target.name;   
        // search whether the property name is not in the array (position returned <0)
        // if absent, add it; if present, remove it
        this.setState( (state) => {  
            if (state.project_properties_to_render.indexOf(name)<0){
                state.project_properties_to_render.push(name)
            } else {
                state.project_properties_to_render.pop(name)
            }
            this.executeSearch();
        });
    };

    render(){
        return( 
            <div>
                <SortProjectList projects = {this.state.gql_response}
                />
                <SearchOptionsCheckboxes checkBoxOptions = {this.state.available_project_properties} 
                container_function_checkbox_click_handler = {this.checkbox_click_handler}
                />
            </div>
        )
    }

}




export default withApollo(ProjectListContainer);