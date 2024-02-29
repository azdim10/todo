import React, { Component } from 'react';
// import TodoList from '../todolist/Todolist.jsx';
export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            completed: false,
        }
    }
    onLabClick = () => {
        this.setState({completed: true})
    }
    render(){ 
        return (
            <section className = 'main'>
                <footer className = 'footer'>
                    <span className = 'todo-count'> items length</span>
                    <ul className = 'filters'>
                        <li>
                            <button className = 'selected'>All</button>
                        </li>
                        <li>
                            <button>Active</button>
                        </li>
                        <li>
                            <button>Completed</button>
                        </li>
                    </ul>
                    <button className = 'clear-completed'>Clear completed</button>
                </footer>
            </section>
        )
    }

}