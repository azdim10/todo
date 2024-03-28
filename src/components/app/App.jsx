import React, { useState } from 'react';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import TodoList from '../todolist/Todolist.jsx';

const App = () => {
  const [todoData, setTodoData] = useState([]);
  const [filter, setFilter] = useState('all');

  const onAddTodo = (label) => {
    const newTodo = {
      label,
      completed: false,
      id: Date.now()
    };
    setTodoData(prevTodoData => [...prevTodoData, newTodo])
  };

  const onToggleCompleted = (id) => {
    setTodoData(prevTodoData => prevTodoData.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  };

  const onDelete = (id) => {
    setTodoData(prevTodoData => prevTodoData.filter(todo => todo.id !== id))
  };

  const onEdit = (id, newLabel) => {
    setTodoData(prevTodoData => prevTodoData.map(todo => todo.id === id ? {...todo, label: newLabel} : todo))
  };

  const onClearCompleted = () => {
    setTodoData(prevTodoData => prevTodoData.filter(todo=>!todo.completed))
  };
    return (
      <section className="todoapp">
        <Header onAddTodo={onAddTodo} />
        <TodoList
          todos={todoData}
          onToggleCompleted={onToggleCompleted}
          onDelete={onDelete}
          onEdit={onEdit}
          filter={filter}
        />
        <Footer
          todos={todoData}
          onClearCompleted={onClearCompleted}
          filter={filter}
          setFilter={setFilter}
        />
      </section>
    );
  }

export default App;