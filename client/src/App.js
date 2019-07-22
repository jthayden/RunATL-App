import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Neighborhoods from './components/Neighborhoods.js'
import SingleNeighborhood from './components/SingleNeighborhood'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Neighborhoods}/>
          <Route path='/route' component={Routes}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
