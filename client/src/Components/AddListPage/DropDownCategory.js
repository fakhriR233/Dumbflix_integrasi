import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";

export class DropDwonCategory extends Component {
  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-button-dark-example1"
          variant="none"
          className="text-white"
          size="sm"
          style={{
            border: "1px solid white",
            backgroundColor: "#111111",
            fontSize: "10px",
            letterSpacing: "1px",
          }}
        >
          List Category
        </Dropdown.Toggle>

        <Dropdown.Menu variant="none" style={{ backgroundColor: "#111111" }}>
          <Dropdown.Item
            className="text-white fw-bold"
            style={{ backgroundColor: "#111111" }}
          >
            TV Shows
          </Dropdown.Item>
          <Dropdown.Item
            className="text-white fw-bold"
            style={{ backgroundColor: "#111111" }}
          >
            Movies
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default DropDwonCategory;
