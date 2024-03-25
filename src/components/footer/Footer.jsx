import React, { Component } from 'react';
class Footer extends Component {
  render() {
    const { todos, onClearCompleted, filter, setFilter } = this.props;

    const filteredTodos = todos.filter(todo => {
      if (filter === 'all') {
        return true;
      } else if (filter === 'active') {
        return !todo.completed;
      } else if (filter === 'completed') {
        return todo.completed;
      }
      return false;
    });

    const itemsLeft = filteredTodos.length;

    return (
      <footer className="footer">
        <span className="todo-count">{itemsLeft} items left</span>
        <ul className="filters">
          <li>
            <button className={filter === 'all' ? 'selected' : ''} onClick={() => setFilter('all')}>All</button>
          </li>
          <li>
            <button className={filter === 'active' ? 'selected' : ''} onClick={() => setFilter('active')}>Active</button>
          </li>
          <li>
            <button className={filter === 'completed' ? 'selected' : ''} onClick={() => setFilter('completed')}>Completed</button>
          </li>
        </ul>
        <button className="clear-completed" onClick={onClearCompleted}>Clear completed</button>
      </footer>
    );
  }
}

export default Footer;