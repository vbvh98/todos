import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map((todo, index) => (
          <li key={index}>
            <ToDoItem
              todo={todo}
              index={index}
              toggleToDoState={this.props.toggleToDoState}
              removeTodo={this.props.removeTodo}
            />
          </li>
				))}
      </ul>
    );
  }
}

export default ToDoList;
