import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/header/Header.jsx';
import Main from './components/main/Main.jsx';
import TodoList from './components/todolist/Todolist.jsx';
import './index.css';

const App = () => {
    const [todoData, setTodoData] = useState([
    ]);
    const onAddTodo = (label) => {
        const newTodo = {
            label,
            completed: false,
            id : Date.now()
        }
        setTodoData((prevTodos) => [...prevTodos, newTodo])
    }
    const onToggleCompleted = (id) => {
        setTodoData((prevTodos  ) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };
    const onDelete = (id) => {
        const updatedTodo = todoData.filter((el) => el.id !== id);
        setTodoData(updatedTodo)
    }
    const onEdit = (id, newLabel) => {
        const updatedTodos = todoData.map((todo) => 
        todo.id === id ? { ...todo, label:newLabel} : todo)
        setTodoData(updatedTodos);
    }

    return (   
        <section className="todoapp">
            <Header onAddTodo = {onAddTodo} />
            <TodoList todos={todoData} onToggleCompleted={onToggleCompleted} onDelete = {onDelete} onEdit = {onEdit}/>
            <Main />
        </section>
    );
};

createRoot(document.getElementById('root')).render(<App />);