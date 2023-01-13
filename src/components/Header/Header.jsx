import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import Toggle from "../Toggle/Toggle";

const Header = () => {
  return (
    <header className="app-header">
      <menu className="app-menu">
        <h1>Awesome Kanban Board</h1>
        <div className="sign-in">
          <FontAwesomeIcon icon={faCircleUser} size="3x" color="#FFFFFF" />
          <Toggle />
        </div>
      </menu>
    </header>
  );
};

export default Header;
