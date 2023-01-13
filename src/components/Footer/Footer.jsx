import React from "react";
import "../Footer/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <div className="calculate">
            <div className="calculated active-tasks">
              Active tasks: <span>{this.props.lists[0].cards.length}</span>
            </div>
            <div className="calculated finished-tasks">
              Finished tasks: <span>{this.props.lists[3].cards.length}</span>
            </div>
          </div>
          <div className="calculated kanban-by">Kanban board by Oleg, 2023</div>
        </div>
      </div>
    );
  }
}

export default Footer;
