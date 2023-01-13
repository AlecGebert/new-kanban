import React from "react";
import "./AddTaskForm.css";

export default class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  onSubmit(event) {
    event.preventDefault();
    const taskText = this.textInput.value.trim();
    const listNumber = this.props.formNum;
    console.log(listNumber);
    if (taskText && this.props.onAdd) {
      this.props.onAdd(taskText, listNumber);
    }
    this.textInput.value = "";
  }

  setEditing(editing) {
    this.setState({
      editing,
    });
  }

  render() {
    if (!this.state.editing) {
      return (
        <button
          className="button open-add-button"
          onClick={() => this.setEditing(true)}
        >
          + Add card
        </button>
      );
    }
    return (
      <form className="card add-task-form" onSubmit={(e) => this.onSubmit(e)}>
        <input
          type="text"
          className="task-input"
          ref={(input) => (this.textInput = input)}
          aria-label="Add a task"
        />
        <div>
          <button className="button add-button">Submit</button>
          <button
            className="button cancel-button"
            onClick={() => this.setEditing(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}
