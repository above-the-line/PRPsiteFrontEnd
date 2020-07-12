import React, { Component } from "react";
import Project from "../../components/views/landingPageProjectList/Project";
import { Query } from "react-apollo";
import gql from "graphql-tag";

// This tagged template literal
// is passing the string wrapped in backticks
// to a gql function (which is defined
// in graphql-tag module / dependency )
// The returned string query is passed to
// Apollo <Query /> component below as a prop
const PROJECTS_QUERY = gql`
  {
    projects {
      id
      project_name
      project_year
      project_category {
        short_film
      }
      avi_roles_on_project {
        avi_director
        avi_gaffer
      }
    }
  }
`;

class ProjectList extends Component {
  render() {
    // Query component provides us with
    // "render prop function"
    // which is why ProjectsToRender is
    // returned as a function result
    // it is returned from server call
    return (
      <Query query={PROJECTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          // This is the structure of the result of the GQL query
          // which can be confirmed in the GQL playground
          const ProjectsToRender = data.projects;

          return (
            <div>
              {ProjectsToRender.map((project) => (
                <Project key={project.id} project={project} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default ProjectList;
