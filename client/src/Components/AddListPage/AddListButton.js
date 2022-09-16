import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ButtonModalAddEpisode from "../AddEpisode/ButtonModalAddEpisode";
import DropDwonCategory from "./DropDownCategory";

function AddListButton() {
  return (
    <Container>
      <Row className="d-flex justify-content-center my-5">
        <Col className="d-flex flex-start">
          <h4 className="me-5 fw-bold" style={{ letterSpacing: "2px" }}>
            List Film
          </h4>
          <DropDwonCategory />
        </Col>
        <Col sm={2} className="d-flex justify-content-end">
          <ButtonModalAddEpisode />
        </Col>
      </Row>
    </Container>
  );
}

export default AddListButton;
