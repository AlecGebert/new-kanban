import React, { Component } from "react";
import "./Main.css";
import Footer from "../Footer/Footer";
import List from "../List/List";
import Header from "../Header/Header";

export default class Main extends Component {
  render() {
    const lists = this.props.lists.map((list, index) => (
      <li className="list-wrapper" key={index}>
        <List
          {...list}
          onAdd={(taskText, listNumber) =>
            this.props.addTaskCard(taskText, listNumber)
          }
          onDragStart={(e, fromList) => this.props.onDragStart(e, `${list.id}`)}
          onDragOver={(e) => this.props.onDragOver(e)}
          onDrop={(e, listNum) => {
            this.props.onDrop(e, `${list.id}`);
          }}
        />
      </li>
    ));

    return (
      <div className="App">
        <Header />
        <ul className="lists">{lists}</ul>
        <Footer lists={this.props.lists} />
      </div>
    );
  }
}
