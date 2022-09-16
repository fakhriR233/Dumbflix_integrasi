import React, { Component } from "react";
import { Button, Dropdown } from "react-bootstrap";

export class ButtonAction extends Component {
  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle
          as={Button}
          className="text-primary"
          // variant="dark"
          id="dropdown-basic"
          style={{ fontSize: "30px", background: "none", border: "none" }}
        ></Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item className="text-success fw-bold">
            Approved
          </Dropdown.Item>
          <Dropdown.Item className="text-danger fw-bold">Cancel</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default ButtonAction;
