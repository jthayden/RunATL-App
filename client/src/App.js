import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Neighborhoods from "./components/Neighborhoods.js";
import Routes from "./components/Routes";
import SingleNeighborhood from "./components/SingleNeighborhood";
import SingleRoute from "./components/SingleRoute.js";
import Groups from "./components/Groups.js";
import SingleGroup from "./components/SingleGroup.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Neighborhoods} />
          <Route
            exact
            path="/neighborhoods/:neighborhoodId"
            component={SingleNeighborhood}
          />
          <Route exact path="/routes/:routeId" component={SingleRoute} />
          <Route exact path="/routes" component={Routes} />
          <Route exact path="/groups" component={Groups} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
