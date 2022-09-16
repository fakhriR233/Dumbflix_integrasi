import React from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { IoAttachOutline } from "react-icons/io5";

function AddEpisode(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter text-center">
          Add Episode
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail" md={8}>
              <Form.Control type="text" placeholder="Title Episode" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control
                type="file"
                placeholder="Attach Thumbnail"
                hidden=""
              />
              <IoAttachOutline />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Link Film" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Col md={3}>
          <Button
            onClick={props.onHide}
            className="btn btn-danger fw-bold w-100"
          >
            Add
          </Button>
        </Col>
      </Modal.Footer>
    </Modal>
  );
}

export default AddEpisode;
