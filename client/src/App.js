import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllNeighborhoods from './components/neighborhoods/AllNeighborhoods';
import Routes from "./components/Routes";
import SingleNeighborhood from "./components/SingleNeighborhood";
import SingleRoute from "./components/SingleRoute.js";
import Groups from "./components/Groups.js";
import SingleGroup from "./components/SingleGroup.js";
import CreateNeighborhood from "./components/neighborhoods/CreateNeighborhood.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={AllNeighborhoods} />
          <Route exact path='/neighborhoods' component={AllNeighborhoods}/>
          <Route exact path='/neighborhoods/create' component={CreateNeighborhood}/>
          <Route
            exact
            path="/neighborhoods/:neighborhoodId"
            component={SingleNeighborhood}
          />
          <Route exact path="/routes/:routeId" component={SingleRoute} />
          <Route exact path="/routes" component={Routes} />
          <Route exact path="/groups" component={Groups} />
          <Route exact path="/groups/:groupId" component={SingleGroup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
