import React, { Component } from 'react';
import CardList from './CardList';
import SearchBar from './SearchBar';
import { robots } from './robots';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: ''
    };
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
    console.log(this.state.searchField.toLowerCase());
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot =>
      robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBar searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
