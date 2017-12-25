import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

class ToDoList extends Component {
  toggleToDoComplition(index, event) {
    event.preventDefault();
    this.props.toggleToDoState(index);
  }

  handleRemove(index, event) {
    console.log(event, index);
    this.props.removeTodo(index);
  }

  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map((todo, index) => (
          <li key={index}>
            <Card>
              <CardHeader
                title={todo.text}
                subtitle={todo.done ? 'Completed' : 'To be Done'}
                actAsExpander
                showExpandableButton
              />
              <CardText>
                <Toggle
                  toggled={todo.done}
                  onToggle={this.toggleToDoComplition.bind(this, index)}
                  labelPosition="right"
                  label="This toggle is mark of completion of this todo."
                />
              </CardText>
              <CardTitle title={todo.text} expandable />
              <CardActions>
                <FlatButton label="Remove" onClick={this.handleRemove.bind(this, index)} />
              </CardActions>
            </Card>
          </li>
        ))}
      </ul>
    );
  }
}

export default ToDoList;
