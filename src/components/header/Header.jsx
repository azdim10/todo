// Header.jsx
import React, { useState } from 'react';

const Header = ({ onAddTodo }) => {
    const [newTodoLabel, setNewTodoLabel] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && newTodoLabel.trim() !== '') {
            onAddTodo(newTodoLabel);
            setNewTodoLabel('');
        }
    };

    const handleInputChange = (event) => {
        setNewTodoLabel(event.target.value);
    };

    return (
        <header className="header">
            <h1>Todos</h1>
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                value={newTodoLabel}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
            />
        </header>
    );
};

export default Header;