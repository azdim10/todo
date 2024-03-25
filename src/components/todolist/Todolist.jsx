import React, { Component } from 'react';
import TodoListItem from '../todolistitem/TodoListItem.jsx';
import './todolist.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: null
    };
  }

  render() {
    const { todos, onToggleCompleted, onDelete, onEdit, filter } = this.props;
    const { editing } = this.state;

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

    const elements = filteredTodos.map((item) => {
      const { id, ...itemProps } = item;
      const isEditing = editing === id;
      return (
        <li key={id} className={`${itemProps.completed ? 'completed' : ''}${isEditing ? 'editing' : '' }`}>
          <TodoListItem
            id={id}
            onToggleCompleted={onToggleCompleted}
            onDelete={onDelete}
            onEdit={onEdit}
            editing={editing}
            setEditing={(editingId) => this.setState({ editing: editingId })}
            isEditing = {isEditing}
            {...itemProps}
          />
        </li>
      );
    });

    return (
      <ul className="todo-list">
        {elements}
      </ul>
    );
  }
}

export default TodoList;