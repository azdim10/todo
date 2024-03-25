import React, { Component } from 'react';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import TodoList from '../todolist/Todolist.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [],
      filter: 'all'
    };
  }

  onAddTodo = (label) => {
    const newTodo = {
      label,
      completed: false,
      id: Date.now()
    };
    this.setState((prevState) => ({
      todoData: [...prevState.todoData, newTodo]
    }));
  };

  onToggleCompleted = (id) => {
    this.setState((prevState) => ({
      todoData: prevState.todoData.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }));
  };

  onDelete = (id) => {
    this.setState((prevState) => ({
      todoData: prevState.todoData.filter((todo) => todo.id !== id)
    }));
  };

  onEdit = (id, newLabel) => {
    this.setState((prevState) => ({
      todoData: prevState.todoData.map((todo) =>
        todo.id === id ? { ...todo, label: newLabel } : todo
      )
    }));
  };

  onClearCompleted = () => {
    this.setState((prevState) => ({
      todoData: prevState.todoData.filter((todo) => !todo.completed)
    }));
  };

  setFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { todoData, filter } = this.state;

    return (
      <section className="todoapp">
        <Header onAddTodo={this.onAddTodo} />
        <TodoList
          todos={todoData}
          onToggleCompleted={this.onToggleCompleted}
          onDelete={this.onDelete}
          onEdit={this.onEdit}
          filter={filter}
        />
        <Footer
          todos={todoData}
          onClearCompleted={this.onClearCompleted}
          filter={filter}
          setFilter={this.setFilter}
        />
      </section>
    );
  }
}

export default App;