import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
  }

  handleRemove(event, index) {
    event.preventDefault();
    this.props.removeTodo(index);
  }

  toggleToDoComplition(event, index) {
    event.preventDefault();
    this.props.toggleToDoState(index);
  }

  handleEdit(event) {
    event.preventDefault();
    this.setState({
      edit: true,
    });
  }

  handleOnEdit(event) {
    event.preventDefault();
  }

  render() {
    const { todo, index } = this.props;
    const cardStyle = {background: todo.done ? 'rgb(0, 220, 200)' : '#f55f51'}
    return (
      <Card style={cardStyle}>
        <CardHeader
          title={todo.text}
          subtitle={`${todo.date.day} / ${todo.date.month} / ${todo.date.year}`}
          actAsExpander
          showExpandableButton
        />
        <CardText>
          <Toggle
            toggled={todo.done}
            onToggle={(event) => {
							this.toggleToDoComplition(event, index);
						}}
            labelPosition="right"
            label="This toggle is mark of completion of this todo."
          />
        </CardText>
        {this.state.edit ? (
          <div>
            <TextField hintText={todo.text} id="newTodoText" />
            <RaisedButton onClick={this.handleOnEdit.bind(this)} label="Edit" primary />
          </div>
				) : (
  <CardTitle title={todo.text} expandable />
				)}
        <CardActions>
          <FlatButton
            label="Remove"
            onClick={(event) => {
							this.handleRemove(event, index);
						}}
          />
          {/* <FlatButton label="Edit" onClick={this.handleEdit.bind(this)} /> */}
        </CardActions>
      </Card>
    );
  }
}

export default ToDoItem;
