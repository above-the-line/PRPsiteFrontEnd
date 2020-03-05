import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import ProjectList from './ProjectList';
import CreateProject from './CreateProject'

class App extends Component {
  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={ProjectList} />
            <Route exact path="/create" component={CreateProject} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
