import React from "react";
import TaskCard from "../TaskCard/TaskCard";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import "./List.css";
import TaskFromList from "../TaskFromList/TaskFromList";

export default class List extends React.Component {
  render() {
    const listNumber = this.props.formNum;
    console.log(listNumber);
    const cards = this.props.cards.map((card, index) => {
      return (
        <li key={index}>
          <TaskCard {...card} onDragStart={this.props.onDragStart} />
        </li>
      );
    });

    let element;

    if (this.props.id === 0) {
      element = (
        <AddTaskForm formNum={this.props.id} onAdd={this.props.onAdd} />
      );
    } else {
      element = (
        <TaskFromList
          cards={this.props.cards}
          formNum={this.props.id}
          onAdd={this.props.onAdd}
        />
      );
    }

    return (
      <div>
        <h2 className="name-header">{this.props.title}</h2>
        <ul
          className="list"
          onDragOver={this.props.onDragOver}
          onDrop={this.props.onDrop}
        >
          {cards}

          <li className="add-list-wrapper">{element}</li>
        </ul>
      </div>
    );
  }
}
