import React from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import TopNavbar from "../Utility/TopNavbar";
//import { BsPaperclip } from "react-icons/bs";

function Payment() {
  return (
    <Container fluid style={{ height: "100vh", backgroundColor: "#2f2f2f" }}>
      <Row>
        <TopNavbar />
      </Row>

      <Row>
        <Col className="" style={{ textAlign: "center" }}>
          <h1 className="mt-5 mb-4 text-white fw-bold">Premium</h1>
          <p className="text-white">
            Bayar Sekarang dan Nikmati streaming film-film yang kekinian dari{" "}
            <span className="text-danger fw-bold">DUMBFLIX</span>
          </p>
          <p>
            <span className="text-danger fw-bold">DUMBFLIX : </span>{" "}
            <span className="fw-bold text-white">0981119181</span>
          </p>
        </Col>
        <Row className="d-flex flex-column justify-content-center mt-5">
          <Col className="d-flex flex-column justify-content-center align-items-center mt-3">
            <Form.Control
              className=" text-center"
              type="text"
              placeholder="Input Your Account Number"
              style={{ width: "350px" }}
            />
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center mt-3">
            <InputGroup className="mb-3" style={{ width: "350px" }}>
              <Form.Control
                className="text-center fw-bold text-danger"
                type="file"
              />
              {/* <InputGroup.Text id="basic-addon2" className='text-danger fw-bold' style={{ fontSize:'25px' }}><BsPaperclip/></InputGroup.Text> */}
            </InputGroup>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center mt-3">
            <a
              href="/"
              className="btn btn-danger mt-3"
              style={{ width: "350px" }}
            >
              Kirim
            </a>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Payment;
