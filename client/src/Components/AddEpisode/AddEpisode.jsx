import React, { useState } from "react";
import { Button, Modal, Form, Col, Row, Alert } from "react-bootstrap";
import { IoAttachOutline } from "react-icons/io5";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { API } from "../../config/api";

function AddEpisode(props) {
  let Navigate = useNavigate();

  const title = " Admin Add Movies";
  document.title = "Dumbflix | " + title;

  const [form, setForm] = useState({
    title: "",
    thumbnailEpisode: "",
    linkFilm: "",
    film_id: "",
  });

  const [message, setMessage] = useState(null);

  const addEpisodeHandler = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration Content-type
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify(form);

      // Insert data user to database
      const response = await API.post("/episode", body, config);

      props.onHide();

      // Handling response here
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={(e) => addEpisodeHandler.mutate(e)}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter text-center">
            Add Episode
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Col md={3}>
            <Button className="btn btn-danger fw-bold w-100">Add</Button>
          </Col>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default AddEpisode;
