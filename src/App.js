import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import NewToDoForm from './NewToDoForm';
import ToDoList from './ToDoList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          text: 'Hello, World!',
          done: true,
        },
        {
          text: 'Study, please!',
          done: false,
        },
      ],
    };
  }

  addNewToDo(text) {
    const newToDo = {
      text,
      done: false,
    };
    const newToDos = this.state.todos.map(todo => Object.assign({}, todo)).concat(newToDo);
    this.setState({
      todos: newToDos,
    });
  }

  removeTodo(index) {
    const newToDos = this.state.todos.map(todo => Object.assign({}, todo)).filter((item, i) => i !== index);
    this.setState({
      todos: newToDos,
    });
  }

  toggleToDoState(index) {
    const newToDos = this.state.todos.map(todo => Object.assign({}, todo));
    newToDos[index].done = !newToDos[index].done;

    this.setState({
      todos: newToDos,
    });
  }

  render() {
    return (
      <div>
        <AppBar
          style={{ textAlign: 'center' }}
          title="Vaibhav's To-Do's"
          showMenuIconButton={false}
        />
        <NewToDoForm addNewToDo={this.addNewToDo.bind(this)} />
        <ToDoList
          toggleToDoState={this.toggleToDoState.bind(this)}
          removeTodo={this.removeTodo.bind(this)}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
