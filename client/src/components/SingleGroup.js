import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

export default class SingleGroup extends Component {
  state = {
    group: {},
    isEditFormDisplayed: false,
    redirectToHome: false
  };

  componentDidMount() {
    axios.get(`/api/groups/${this.props.match.params.groupId}`).then(res => {
      this.setState({ group: res.data });
    });
  }

  handleInputChange = event => {
    const copiedGroup = { ...this.state.group };
    copiedGroup[event.target.name] = event.target.value;
    this.setState({ group: copiedGroup });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .put(`api/routes/${this.state.group._id}`, this.state.route)
      .then(res => {
        this.setState({
          group: res.data,
          isEditFormDisplayed: false
        });
      });
  };

  handleToggleEditForm = () => {
    this.setState(state => {
      return { isEditFormDisplayed: !state.isEditFormDisplayed };
    });
  };

  handleDeleteRoute = () => {
    axios.delete(`/api/groups/${this.state.group._id}`).then(() => {
      this.setState({ redirectToHome: true });
    });
  };

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/groups" />;
    }
    return this.state.isEditFormDisplayed ? (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="group-name">Group Name</label>
        <input
          type="text"
          id="group-name"
          name="name"
          onChange={this.handleInputChange}
          value={this.state.group.name}
        />
        <label htmlFor="group-description">Group Description</label>
        <input
          type="text"
          id="group-description"
          name="description"
          onChange={this.handleInputChange}
          value={this.state.group.name}
        />
        <label htmlFor="group-routes">Group Routes</label>
        <input
          type="text"
          id="group-routes"
          name="routes"
          onChange={this.handleInputChange}
          value={this.state.group.routes}
        />
        <input type="submit" value="Update Group" />
      </form>
    ) : (
      <div>
        <button onClick={this.handleToggleEditForm}>Edit Group</button>
        <button onClick={this.handleDeleteRoute}>Delete Group</button>
        <h2>{this.state.group.name}</h2>
        <p>{this.state.group.description}</p>
        <p>{this.state.group.routes} </p>
      </div>
    );
  }
}
