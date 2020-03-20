// import React, { Component } from 'react'
// import Project from './Project'
// import { Query } from 'react-apollo'
// import gql from 'graphql-tag'


// // Apollo handles sending mutation to server
// // define the mutation and wrap your component 
// // with the graphql container 
// // (tagged template literal - a function that is passed as a parsed string)
// const FILTERED_GQL_QUERY = gql`
// query ArbitraryNameForfilterProjectsByRole($rolesOfInterest: Avi_RolesCreateInput){
//   filterProjectsByRole(where: $rolesOfInterest){
//     id
//     project_name
//     project_year
//   }
// }
// `

// class SortProjectList extends Component {

//     state = {
//         gql_response: {}
//     };

//     // the withApollo function injects the ApolloClient instance created in index.js
//     // into this component (project) as a new prop called client.
//     // This client has a method called query that allows sending a query manually 
//     // instead of using the graphql higher-order component.
//     executeSearch = async () => {
//         const { filter } = this.props.state.gql_vars
//         const result = await this.props.client.query({
//             query: FILTERED_GQL_QUERY,
//             variables: { filter }
//         })
//         const projects = result.data.filterProjectsByRole
//         this.setState(this.state.gql_response = projects) 
//     }




//     render() {
//         // Query component provides us with
//         // "render prop function"
//         // which is why ProjectsToRender is 
//         // returned as a function result
//         // it is returned from server call
//         return (
//             <div>
//                 <Query query = {FILTERED_GQL_QUERY}
//                         variables = {() => this.props.state.gql_vars}
//                 >
//                     { ({ loading, error, data }) => {
//                     // above data object is returned from the gql query result
//                         if (loading) return <div>Fetching</div>
//                         if (error) return <div>Error</div>
//                         console.log(data)
//                         // this.setState({"gql_response": data})
//                         this.setState({data})
//                         console.log(this.props.state)
                            
//                         return (
//                             <div>
//                             {this.state.gql_response.map(project => 
//                                 <Project key={project.id}
//                                         project={project}
//                                 />
//                             )}
//                             </div>
//                         )
//                         }
//                     }
//                 </Query>
//             </div>
//         )
//       }
//     }
    





// export default SortProjectList