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

  handleSubmit = (event) => {
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

  _onKeyPress = (event) => {
    if (event.charCode === 13) { // enter key pressed
      event.preventDefault();
      // do something here
      this.handleSubmit()
    } 
  }

  render() {
    return (
      <div className="add-todo-form">
        Enter New To-Do: <TextField
          style={{ margin: '0 20px' }}
          hintText="Enter New To-Do...."
          errorText={this.state.error ? 'This field is required' : null}
          id="newTodo"
          onKeyPress={this._onKeyPress}
        />
        {/* <RaisedButton
          style={{ margin: '0 20px 0 0' }}
          onClick={this.handleSubmit}
          label="Add To-Do"
          primary
        /> */}
      </div>
    );
  }
}

export default NewToDoForm;
