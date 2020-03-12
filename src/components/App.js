import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
// import ProjectList from './ProjectList';
import SortProjectList from './SortProjectList';
import CreateProject from './CreateProject'
import Login from './Login'

class App extends Component {
  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            {/* <Route exact path="/" component={ProjectList} /> */}
            <Route exact path="/" component={SortProjectList} />
            <Route exact path="/create" component={CreateProject} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
