import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SingleRoute from "./SingleRoute";

export default class Routes extends Component {
  state = {
    routes: [],
    isNewFormDisplayed: false,
    newRoute: {
      name: "",
      description: "",
      distance: "",
      rating: ""
    }
  };

  componentDidMount() {
    this.getAllRoutes();
  }

  getAllRoutes = () => {
    axios.get("/api/routes").then(res => {
      this.setState({ routes: res.data });
    });
  };

  handleToggleNewForm = () => {
    this.setState(state => {
      return { isNewFormDisplayed: !state.isNewFormDisplayed };
    });
  };

  handleInputChange = event => {
    const copiedRoute = { ...this.state.newRoute };
    copiedRoute[event.target.name] = event.target.value;

    this.setState({ newRoute: copiedRoute });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios.post("/api/routes", this.state.newRoute).then(() => {
      this.setState({ isNewFormDisplayed: false });
      this.getAllRoutes();
    });
  };

  render() {
    let routesList = this.state.routes.map(route => {
      return (
        <Link key={route._id} to={`/routes/${route._id}`}>
          {route.name}
        </Link>
      );
    });
    return this.state.isNewFormDisplayed ? (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="new-route-name">Route Name</label>
        <input
          type="text"
          name="name"
          id="new-route-name"
          onChange={this.handleInputChange}
          value={this.state.newRoute.name}
        />
        <label htmlFor="new-route-description">Route Description</label>
        <input
          type="text"
          name="description"
          id="new-route-description"
          onChange={this.handleInputChange}
          value={this.state.newRoute.description}
        />
        <label htmlFor="new-route-distance">Route Distance</label>
        <input
          type="number"
          name="distance"
          id="new-route-distance"
          onChange={this.handleInputChange}
          value={this.state.newRoute.distance}
        />
        <label htmlFor="new-route-rating">Rating</label>
        <input
          type="number"
          name="rating"
          id="new-route-rating"
          onChange={this.handleInputChange}
          value={this.state.newRoute.rating}
        />
        <input className="button" type="submit" value="Add New Route" />
      </form>
    ) : (
      <div>
        <button onClick={this.handleToggleNewForm}>Create New Route</button>
        <h1>Routes</h1>
        <div>{routesList}</div>
      </div>
    );
  }
}
