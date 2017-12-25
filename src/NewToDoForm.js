import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class NewToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const newText = document.getElementById('newTodo').value;
    if (!newText) {
      this.setState({
        error: true,
      });
    }
    this.props.addNewToDo(newText);
    document.getElementById('newTodo').value = '';
    this.setState({
      error: false,
    });
  }

  render() {
    return (
      <div className="add-todo-form">
        <TextField
          style={{ flexGrow: '1', margin: '0 20px' }}
          hintText="Enter New To-Do...."
          errorText={this.state.error ? 'This field is required' : null}
          id="newTodo"
        />
        <RaisedButton
          style={{ margin: '0 20px 0 0' }}
          onClick={this.handleSubmit.bind(this)}
          label="Add To-Do"
          primary
        />
      </div>
    );
  }
}

export default NewToDoForm;
