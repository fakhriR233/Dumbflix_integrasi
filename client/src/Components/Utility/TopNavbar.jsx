import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ModalRegister from "../Modal";
import ModalLogin from "../ModalLogin";
import { Link, useNavigate } from "react-router-dom";

//images import

import Logo from "../../Images/DumbflixLogo.png";
import User from "../../Images/User-Icon.png";
import dropdownUser from "../../Images/Icons/Icon-User2.png";
import dropdownPayment from "../../Images/Icons/bill-1.png";
import dropdownLogout from "../../Images/Icons/logout-icon-drowndown.png";
import { UserContext } from "../../context/userContext";

function TopNavbar() {
  let Navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);

  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function homeHandler() {
    Navigate("/");
  }

  function tvHandler(e) {
    e.preventDefault();
    Navigate("/tvshows");
  }
  function moviesHandler() {
    Navigate("/movies");
  }

  function profileHandler(e) {
    e.preventDefault();
    Navigate("/profile");
  }

  function paymentHandler(e) {
    e.preventDefault();
    Navigate("/payment");
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
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link onClick={homeHandler} className="active top-navbar">
                Home
              </Nav.Link>
              <Nav.Link onClick={tvHandler} className="top-navbar">
                TV Shows
              </Nav.Link>
              <Nav.Link onClick={moviesHandler} className="top-navbar">
                Movies
              </Nav.Link>
            </Nav>

            <Navbar.Brand
              onClick={homeHandler}
              className="df-brand"
              style={{ width: "60%" }}
            >
              <img src={Logo} alt="logo" className="nav-img-center" />
            </Navbar.Brand>
            {state.isLogin ? (
              <>
                {" "}
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
                  <NavDropdown.Item onClick={(e) => profileHandler(e)}>
                    <img
                      src={dropdownUser}
                      width="20"
                      height="20"
                      alt="icon user"
                    />{" "}
                    <span className="ms-2">Profile </span>
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={paymentHandler}>
                    <img
                      src={dropdownPayment}
                      width="20"
                      height="20"
                      alt="icon user"
                    />{" "}
                    <span className="ms-2">Pay </span>
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
              </>
            ) : (
              <>
                <Button variant="light" className="mx-3" onClick={handleShow}>
                  Register
                </Button>
                <Button variant="danger" onClick={handleShowLogin}>
                  Login
                </Button>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ModalRegister
        setShow={setShow}
        show={show}
        setShowLogin={setShowLogin}
        showLogin={showLogin}
        setisLogin={state.isLogin}
        isLogin={state.isLogin}
      />
      <ModalLogin
        setShowLogin={setShowLogin}
        showLogin={showLogin}
        setShow={setShow}
        show={show}
      />
    </>
  );
}

export default TopNavbar;
