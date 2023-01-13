import React from "react";
import Edit from "./components/Edit/Edit";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";

class App extends React.Component {
  constructor(props) {
    super(props);
    //if there's a localStorage to be had grab it otherwise set state
    if (localStorage.getItem("lists")) {
      const rawLS = localStorage.getItem("lists");
      const parsedLS = JSON.parse(rawLS);
      this.state = { lists: parsedLS };
    } else {
      this.state = {
        lists: [
          {
            title: "Backlog",
            id: 0,
            cards: [
              {
                taskText: "NodeJs",
                listNumber: 0,
                timeId: 0,
              },
              {
                taskText: "Backend",
                listNumber: 0,
                timeId: 1,
              },
            ],
          },
          {
            title: "Ready",
            id: 1,
            cards: [
              {
                taskText: "Vue",
                listNumber: 1,
                timeId: 2,
              },
              {
                taskText: "Angular",
                listNumber: 1,
                timeId: 3,
              },
            ],
          },
          {
            title: "In Progress",
            id: 2,
            cards: [
              {
                taskText: "React",
                listNumber: 2,
                timeId: 4,
              },
              {
                taskText: "Redux",
                listNumber: 2,
                timeId: 5,
              },
            ],
          },
          {
            title: "Finnished",
            id: 3,
            cards: [
              {
                taskText: "HTML5",
                listNumber: 3,
                timeId: 6,
              },
              {
                taskText: "CSS3",
                listNumber: 3,
                timeId: 7,
              },
            ],
          },
        ],
      };

      localStorage.setItem("lists", JSON.stringify(this.state.lists));
    }
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.addTaskCard = this.addTaskCard.bind(this);
  }

  onDragStart = (e, fromList) => {
    console.log(`what a drag!`);
    const dragInfo = {
      taskId: e.currentTarget.id,
      fromList: fromList,
    };

    localStorage.setItem("dragInfo", JSON.stringify(dragInfo));
  };

  onDragOver = (e) => {
    e.preventDefault();
  };

  onDrop = (e, listNum) => {
    //get the dropped task card, the localStorage,
    const droppedTask = localStorage.getItem("dragInfo");
    const rawLS = localStorage.getItem("lists");
    const parsedLS = JSON.parse(rawLS);
    const parsedDragInfo = JSON.parse(droppedTask);

    //get task cards array, get rid of moved card, and put a new card
    // in the list where it was dropped
    const cardsArray = parsedLS[parsedDragInfo.fromList].cards;
    const taskCard = cardsArray.find(
      (card) => card.timeId == parsedDragInfo.taskId
    );
    const indexOfCard = cardsArray.findIndex(
      (card) => card.timeId == parsedDragInfo.taskId
    );
    parsedLS[parsedDragInfo.fromList].cards.splice(indexOfCard, 1);
    parsedLS[listNum].cards.push({
      ...taskCard,
      listNumber: parseInt(listNum),
    });

    //sync the state and localStorage
    this.setState({
      lists: parsedLS,
    });
    localStorage.setItem("lists", JSON.stringify(parsedLS));
  };

  //add some new task cards
  addTaskCard(taskText, listNumber) {
    const rawLS = localStorage.getItem("lists");
    const parsedLS = JSON.parse(rawLS);

    const newTask = {
      taskText,
      listNumber,
      timeId: new Date().valueOf(),
    };

    parsedLS[listNumber].cards.push(newTask);

    //sync state and localStorage
    this.setState({
      lists: parsedLS,
    });
    localStorage.setItem("lists", JSON.stringify(parsedLS));
  }
  render() {
    return (
      <>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                lists={this.state.lists}
                onDragStart={this.onDragStart}
                onDragOver={this.onDragOver}
                onDrop={this.onDrop}
                addTaskCard={this.addTaskCard}
              />
            }
          />
          <Route
            path="/edit"
            element={
              <Edit
                lists={this.state.lists}
                taskText={this.state.taskText}
                timeId={this.state.timeId}
              />
            }
          />
        </Routes>
      </>
    );
  }
}

export default App;
