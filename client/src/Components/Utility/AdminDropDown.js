import React, { Component } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUser, FaMoneyCheckAlt, FaSignOutAlt } from "react-icons/fa";
import userPhoto from "../../Images/profil.jpg";

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
        >
          <img src={userPhoto} width={40} alt="user" />
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item as={Link} to="/profile">
            <FaUser className="text-danger ms-2" />
            Profile
          </Dropdown.Item>

          <Dropdown.Item as={Link} to="/payment">
            <FaMoneyCheckAlt className="text-danger ms-2" />
            Pay
          </Dropdown.Item>
          <Dropdown.Divider className="bg-light dropDivid" />
          <Dropdown.Item href="#">
            <FaSignOutAlt className="text-danger ms-2" />
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default ButtonAction;
