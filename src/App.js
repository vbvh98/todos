import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import NewToDoForm from './components/NewToDoForm';
import ToDoList from './components/ToDoList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    let constate = {
      todos: []
    }
    if (localStorage.getItem('state')){
      constate = JSON.parse(localStorage.getItem('state'))
    }
    this.state = constate;
    
  }

  save = () => {
    localStorage.removeItem('state')
    localStorage.setItem('state', JSON.stringify(this.state))
  }

  addNewToDo = (text) => {
    let date = new Date()
    const newToDo = {
      text,
      date: {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
      },
      done: false,
    };
    const newToDos = [...this.state.todos, newToDo];
    this.setState({
      todos: newToDos,
    }, () => this.save());
    
  }

  removeTodo = (index) => {
    const newToDos = [...this.state.todos].filter((e, i) => i !== index);

    this.setState({
      todos: newToDos,
    }, () => this.save());
    
  }

  toggleToDoState = (index) => {
    this.setState(prevState => {
      let toggledTodo = prevState.todos[index]
      toggledTodo = {...toggledTodo, done: toggledTodo.done ? false : true}
      return {
        todos: prevState.todos.map((todo, i) => {
          return i !== index ? todo : toggledTodo
        })
      }
    }, () => this.save());
    
  }

  render() {
    return (
      <div>
        <AppBar
          style={{ textAlign: 'center' }}
          title="To-Do"
          showMenuIconButton={false}
        />
        <NewToDoForm addNewToDo={this.addNewToDo} />
        {(this.state.todos) && <ToDoList
          toggleToDoState={this.toggleToDoState}
          removeTodo={this.removeTodo}
          todos={this.state.todos}
        />}
      </div>
    );
  }
}

export default App;
