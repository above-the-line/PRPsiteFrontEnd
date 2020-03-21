import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import CreateProject from './CreateProject'
import Login from './Login'
import ProjectListContainer from './ProjectListContainer';

class App extends Component {
  render() {
    return (
      <div className="center w85">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            {/* <Route exact path="/" component={ProjectList} /> */}
            <Route exact path="/" component={ProjectListContainer} />
            <Route exact path="/create" component={CreateProject} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
