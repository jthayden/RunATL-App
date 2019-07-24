//Step 1 import React, { Component } and axios

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CreateNeighborhood from './CreateNeighborhood.js'

//Step 2

export default class Neighborhoods extends Component {
  //Step 3
  //Create a state for the component to store view data
  state = {
    neighborhoods: [],
    newNeighborhood: {
      name: "",
      description: ""
    }
  };

  /* Step 4
   * Use componentDidMount to retrieve any data to display
   *   Here you can make calls to your local express server
   *   or to an external API
   *   setState can be run here as well
   *   -REMINDER remember `setState` it is an async function
   */
  componentDidMount() {
    this.getAllNeighborhoods();
  }

  getAllNeighborhoods = () => {
    axios.get("/api/neighborhoods").then(res => {
      this.setState({ neighborhoods: res.data });
    });
  };

  /* Step 5
   *  The render function manages what is shown in the browser
   *  TODO: delete the jsx returned
   *   and replace it with your own custom jsx template
   *
   */
  render() {
    let neighborhoodsList = this.state.neighborhoods.map(neighborhood => {
      return (
        <Link key={neighborhood._id} to={`/neighborhoods/${neighborhood._id}`}>
          {neighborhood.name}
        </Link>
      );
    });
    return (
      <div>
        <h1>Neighborhoods</h1>
        <div>{neighborhoodsList}</div>
        <Link to={'/neighborhoods/create'}>Add Neighborhood</Link>
      </div>
    );
  }
}

