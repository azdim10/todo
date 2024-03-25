import React, { Component } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import './todolistitem.css';

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editText: this.props.label
    };
  }

  handleChange = (e) => {
    this.setState({ editText: e.target.value });
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.props.onEdit(this.props.id, this.state.editText);
      this.props.setEditing(null);
    }
  };

  handleBlur = () => {
    this.props.onEdit(this.props.id, this.state.editText);
    this.props.setEditing(null);
  };

  render() {
    const { id, completed, onToggleCompleted, onDelete, editing } = this.props;
    const { editText } = this.state;

    const viewTemplate = (
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <label>
          <span className="description">{this.props.label}</span>
          <span className="created">created {formatDistanceToNow(new Date(), { addSuffix: true, includeSeconds: true })}</span>
        </label>
        <button className="icon icon-edit" onClick={() => this.props.setEditing(id)}></button>
        <button className="icon icon-destroy" onClick={() => onDelete(id)}></button>
      </div>
    );

    const editTemplate = (
      <form>
        <input
          type="text"
          className="edit"
          value={editText}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          onBlur={this.handleBlur}
          autoFocus
        />
      </form>
    );
        
    return editing === id ? editTemplate : viewTemplate;
  }
}

export default TodoListItem;