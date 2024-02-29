import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const TodoListItem = ({ label }) => {
    console.log(label)
    return <label className="todo-list-item">
        <span className = "description">{label}
        </span>
        <span className = "created">created {formatDistanceToNow(new Date (), {addSuffix : true, includeSeconds:true})}</span>
        </label>;
};

export default TodoListItem;