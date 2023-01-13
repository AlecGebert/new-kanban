import React from "react";
import "./TaskFromList.css";
import TaskCard from "../TaskCard/TaskCard";

export default class TaskFromList extends React.Component {
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
        <select
          ref={(input) => (this.textInput = input)}
          type="text"
          placeholder="Add task!"
          name="name"
          className="task-input"
        >
          <option disabled>Add task!</option>

          {this.props.cards.map((card, index) => (
            <option key={index}>
              <TaskCard {...card} />
            </option>
          ))}
        </select>

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
