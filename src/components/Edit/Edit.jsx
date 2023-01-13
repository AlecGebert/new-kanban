import React from "react";
import { useState } from "react";
import "../Edit/Edit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Edit = (props) => {
  const [value, setValue] = useState(props.taskText);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="App">
      <Header />
      <ul className="lists">
        <form className="form-container">
          <Link to="/" className="close-button">
            <FontAwesomeIcon icon={faX} size="2xl" />
          </Link>
          <textarea className="text-edit">
            <div
              onClick={() => {
                setIsEdit(true);
              }}
              className="task-card"
              id={[props.timeId]}
            >
              {value}
            </div>
          </textarea>
        </form>
      </ul>
      <Footer lists={props.lists} />
    </div>
  );
};
export default Edit;
