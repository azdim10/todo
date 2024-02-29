import React from 'react';
import TodoListItem from '../todolistitem/TodoListItem.jsx';
import './todolist.css';

const TodoList = ({ todos, onToggleCompleted, onDelete, onEdit}) => {
    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className={itemProps.completed ? 'completed' : ''}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={itemProps.completed}
                        onChange={() => onToggleCompleted(id)}
                    />
                    <TodoListItem {...itemProps} />
                    <button className="icon icon-edit" onClick = { () => onEdit()}></button>
                    <button className="icon icon-destroy" onClick = { () => onDelete(id) }></button>
                </div>
            </li>
        );
    });
    return (
        <ul className="todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;