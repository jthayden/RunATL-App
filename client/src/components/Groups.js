import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Groups extends Component {
  state = {
    groups: [],
    isNewFormDisplayed: false,
    newGroup: {
      name: "",
      description: "",
      routes: ""
    }
  };

  componentDidMount() {
    this.getAllGroups();
  }

  getAllGroups = () => {
    axios.get("/api/groups").then(res => {
      this.setState({ groups: res.data });
    });
  };

  handleInputChange = event => {
    const copiedGroup = { ...this.state.newGroup };
    copiedGroup[event.target.name] = event.target.value;
    this.setState({ newGroup: copiedGroup });
  };

  handleToggleNewForm = () => {
    this.setState(state => {
      return { isNewFormDisplayed: !state.isNewFormDisplayed };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios.post("/api/groups", this.state.newGroup).then(() => {
      this.setState({ isNewFormDisplayed: false });
      this.getAllGroups();
    });
  };

  render() {
    let groupsList = this.state.groups.map(group => {
      return (
        <Link key={group._id} to={`/groups/${group._id}`}>
          {group.name}
        </Link>
      );
    });
    return this.state.isNewFormDisplayed ? (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="new-group-name">Group Name</label>
        <input
          type="text"
          name="name"
          id="new-group-name"
          onChange={this.handleInputChange}
          value={this.state.newGroup.name}
        />
        <label htmlFor="new-group-description">Group Description</label>
        <input
          type="text"
          name="description"
          id="new-group-description"
          onChange={this.handleInputChange}
          value={this.state.newGroup.description}
        />
        <label htmlFor="new-group-routes">Group Routes</label>
        <input
          type="text"
          name="routes"
          id="new-group-routes"
          onChange={this.handleInputChange}
          value={this.state.newGroup.routes}
        />
        <input className="button" type="submit" value="Add New Group" />
      </form>
    ) : (
      <div>
        <button onClick={this.handleToggleNewForm}>Create New Group</button>
        <h1>Groups</h1>
        <div>{groupsList}</div>
      </div>
    );
  }
}
