import React from "react";
import { useState } from "react";
import "./TaskCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const TaskCard = (props) => {
  const [value, setValue] = useState(props.taskText);
  const [isEdit, setIsEdit] = useState(false);

  let element;
  if (isEdit) {
    element = (
      <form className="form-container">
        <button
          onClick={() => {
            props.setIsEdit(false);
            props.editPage(false);
          }}
          className="close-button"
        >
          <FontAwesomeIcon icon={faX} size="2xl" />
        </button>
        <textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onBlur={() => setIsEdit(false)}
          className="text-edit"
        />
      </form>
    );
  } else {
    element = (
      <div
        onClick={() => {
          setIsEdit(true);
          props.editPage(true);
        }}
        className="task-card"
        draggable="true"
        id={[props.timeId]}
        onDragStart={props.onDragStart}
      >
        {value}
      </div>
    );
  }

  return <>{element}</>;
};

export default TaskCard;
