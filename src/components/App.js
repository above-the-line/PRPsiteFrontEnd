import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./header/Header";
import CreateProject from "./views/customerPortal/CreateProject";
import Login from "./views/Login";
import ProjectListContainer from "./views/landingPageProjectList/ProjectListContainer";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import styles from "./../styles/Styles.module.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        <Header />
        <Switch>
          {/* <Route exact path="/" component={ProjectList} /> */}
          <Route exact path="/" component={ProjectListContainer} />
          <Route exact path="/create" component={CreateProject} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
