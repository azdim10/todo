import React, { Component } from 'react';
import Timer from '../Timer/Timer.jsx';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoLabel: ''
    };
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter' && this.state.newTodoLabel.trim() !== '') {
      this.props.onAddTodo(this.state.newTodoLabel);
      this.setState({ newTodoLabel: '' });
    }
  };

  handleInputChange = (event) => {
    this.setState({ newTodoLabel: event.target.value });
  };

  render() {
    return (
      <header className="header">
        <h1>Todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={this.state.newTodoLabel}
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyPress}
        />
        <Timer />
      </header>
    );
  }
}

export default Header;