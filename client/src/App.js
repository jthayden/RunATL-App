import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllNeighborhoods from './components/neighborhoods/AllNeighborhoods';
import SingleNeighborhood from './components/neighborhoods/SingleNeighborhood'
// import Routes from "./components/Routes";
// import SingleNeighborhood from "./components/SingleNeighborhood";
import SingleRoute from "./components/routes/SingleRoute";
import CreateRoute from './components/routes/CreateRoute'
// import Groups from "./components/Groups.js";
// import SingleGroup from "./components/SingleGroup.js";
import CreateNeighborhood from "./components/neighborhoods/CreateNeighborhood.js";
import EditNeighborhood from './components/neighborhoods/EditNeighborhood'
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
          <Route exact path='/neighborhoods/:neighborhoodId/edit' component={EditNeighborhood}/>
          <Route exact path="/routes/:routeId" component={SingleRoute} />
          <Route exact path='/routes/:neighborhoodId/create' component={CreateRoute}/>
          {/* <Route exact path="/routes" component={Routes} /> */}
          {/* <Route exact path="/groups" component={Groups} /> */}
          {/* <Route exact path="/groups/:groupId" component={SingleGroup} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
