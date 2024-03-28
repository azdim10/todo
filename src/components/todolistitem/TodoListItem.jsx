import React, { useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import './todolistitem.css';

const TodoListItem = ({ id, completed, label, onToggleCompleted, onDelete,onEdit, editing, setEditing }) => {
  const [editText, setEditText] = useState(label);

  const handleChange = (e) => {
    setEditText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onEdit(id, editText);
      setEditing(null);
    }
  };

  const handleBlur = () => {
    onEdit(id, editText);
    setEditing(null);
  };

  const viewTemplate = (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={() => onToggleCompleted(id)}
      />
      <label>
        <span className="description">{label}</span>
        <span className="created">created {formatDistanceToNow(new Date(), { addSuffix: true, includeSeconds: true })}</span>
      </label>
      <button className="icon icon-edit" onClick={() => setEditing(id)}></button>
      <button className="icon icon-destroy" onClick={() => onDelete(id)}></button>
    </div>
  );

  const editTemplate = (
    <form>
      <input
        type="text"
        className="edit"
        value={editText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        autoFocus
      />
    </form>
  );

  return editing === id ? editTemplate : viewTemplate;
};

export default TodoListItem;