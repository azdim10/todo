import React, { useState } from 'react';

const Footer = ({ todos, onClearCompleted, filter, setFilter }) => {
  const [localFilter, setLocalFilter] = useState(filter);

  const filteredTodos = todos.filter(todo => {
    if (localFilter === 'all') {
      return true;
    } else if (localFilter === 'active') {
      return !todo.completed;
    } else if (localFilter === 'completed') {
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
          <button className={localFilter === 'all' ? 'selected' : ''} onClick={() => setLocalFilter('all')}>All</button>
        </li>
        <li>
          <button className={localFilter === 'active' ? 'selected' : ''} onClick={() => setLocalFilter('active')}>Active</button>
        </li>
        <li>
          <button className={localFilter === 'completed' ? 'selected' : ''} onClick={() => setLocalFilter('completed')}>Completed</button>
        </li>
      </ul>
      <button className="clear-completed" onClick={onClearCompleted}>Clear completed</button>
    </footer>
  );
};

export default Footer;