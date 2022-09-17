import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../Images/DumbflixLogo.png";
import User from "../../Images/User-Icon.png";

import dropdownFilm from "../../Images/Icons/Film-Icon-Admin.png";
import dropdownLogout from "../../Images/Icons/logout-icon-drowndown.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

function TopNavbarAdmin() {
  let Navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);

  function adminFilmHandler(e) {
    e.preventDefault();
    Navigate("/addlistpage");
  }

  function logoAdminHandler(e) {
    e.preventDefault();
    Navigate("/listtransactions");
  }

  function handleLogout(e) {
    e.preventDefault();
    console.log(state);
    dispatch({
      type: "LOGOUT",
    });
    Navigate("/");
  }

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Navbar.Brand
              onClick={logoAdminHandler}
              className="active top-navbar"
            >
              <img
                src={Logo}
                width="115"
                height="35"
                className="d-inline-block align-top logo-admin-navbar"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Nav>
          <NavDropdown
            title={
              <>
                <img
                  src={User}
                  width="40"
                  height="40"
                  className="rounded-circle mx-5"
                  alt="User Icons"
                />
              </>
            }
            id="basic-nav-dropdown"
            menuVariant="dark"
          >
            <NavDropdown.Item onClick={adminFilmHandler}>
              <img src={dropdownFilm} width="20" height="20" alt="icon user" />{" "}
              <span className="ms-2">Film </span>
            </NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleLogout}>
              <img
                src={dropdownLogout}
                width="20"
                height="20"
                alt="icon user"
              />{" "}
              <span className="ms-2">Logout </span>
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbarAdmin;
