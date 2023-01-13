import React from "react";
import "./Toggle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClassActive: false,
    };
  }

  // Function to toggle class
  toggleClass = () => {
    this.setState({ isClassActive: !this.state.isClassActive });
  };
  render() {
    return (
      <>
        <button
          onClick={this.toggleClass}
          className={
            this.state.isClassActive ? "sign-in-button turn" : "sign-in-button"
          }
        >
          <FontAwesomeIcon icon={faChevronDown} size="1x" color="#FFFFFF" />
        </button>
        <div
          className={this.state.isClassActive ? "active" : "modal-container"}
        >
          <div className="modal">
            <div className="modal-content">
              <button>Profile</button>
              <button>Log Out</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Toggle;
