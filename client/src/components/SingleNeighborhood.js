import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

export default class SingleNeighborhood extends Component {
  state = {
    neighborhood: {},
    isEditFormDisplayed: false,
    redirectToHome: false
  };

  componentDidMount() {
    axios
      .get(`/api/neighborhoods/${this.props.match.params.neighborhoodId}`)
      .then(res => {
        this.setState({ neighborhood: res.data });
      });
  }

  handleInputChange = event => {
    const copiedNeighborhood = { ...this.state.neighborhood };
    copiedNeighborhood[event.target.name] = event.target.value;

    this.setState({ neighborhood: copiedNeighborhood });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .put(
        `/api/neighborhoods/${this.state.neighborhood._id}`,
        this.state.neighborhood
      )
      .then(res => {
        this.setState({
          creature: res.data,
          isEditFormDisplayed: false
        });
      });
  };

  handleToggleEditForm = () => {
    this.setState(state => {
      return { isEditFormDisplayed: !state.isEditFormDisplayed };
    });
  };

  handleDeleteNeighborhood = () => {
    axios
      .delete(`/api/neighborhoods/${this.state.neighborhood._id}`)
      .then(() => {
        this.setState({ redirectToHome: true });
      });
  };

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/" />;
    }
    return this.state.isEditFormDisplayed ? (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="neighborhood-name">Neighborhood Name</label>
        <input
          type="text"
          id="neighborhood-name"
          name="name"
          onChange={this.handleInputChange}
          value={this.state.neighborhood.name}
        />
        <label htmlFor="neighborhood-description">
          Neighborhood Description
        </label>
        <input
          type="text"
          id="neighborhood-description"
          name="description"
          onChange={this.handleInputChange}
          value={this.state.neighborhood.description}
        />
        <input type="submit" value="Update Neighborhood" />
      </form>
    ) : (
      <div>
        <button onClick={this.handleToggleEditForm}>Edit Neighborhood</button>
        <button onClick={this.handleDeleteNeighborhood}>
          Delete Neighborhood
        </button>
        <h2>{this.state.neighborhood.name}</h2>
        <p>{this.state.neighborhood.description}</p>
      </div>
    );
  }
}
