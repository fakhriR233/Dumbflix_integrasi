import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import TopNavbarAdmin from "../Components/Utility/TopNavAdmin";
import Thumbnail from "../Images/Icons/Attachment.png";
import { useMutation } from "react-query";

import { API } from "../config/api";
import { Alert } from "react-bootstrap";

const AdminAddMovies = () => {
  let Navigate = useNavigate();

  const title = " Admin Add Movies";
  document.title = "Dumbflix | " + title;

  const [form, setForm] = useState({
    title: "",
    thumbnailfilm: "",
    year: "",
    category_id: "",
    description: "",
  });

  const [message, setMessage] = useState(null);

  const addButtonHandler = useMutation(async (e) => {
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
      const response = await API.post("/film", body, config);

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
    <div className="admin-add-movie-body">
      <TopNavbarAdmin />
      <div className="">
        <Form
          className="w-75 mx-auto"
          onSubmit={(e) => addButtonHandler.mutate(e)}
        >
          <h2 className="admin-add-movie-title py-4">Add Film</h2>
          <Row className="mb-3">
            <Col xs={9}>
              <Form.Control
                placeholder="Title"
                className="admin-add-movie-form"
              />
            </Col>
            <Col>
              <Form.Group controlId="formThumb">
                <Form.Label className="admin-add-movie-thumb text-start pt-1">
                  <p className="ms-3">Attach Thumbnail</p>
                </Form.Label>
                <Form.Control
                  placeholder="Attach Thumbnail"
                  className="admin-add-movie-thumb-file"
                  type="file"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formGridYear">
            <Form.Control placeholder="Year" className="admin-add-movie-form" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridCategory">
            <Form.Select
              defaultValue="Category..."
              className="admin-add-movie-form"
            >
              <option>Choose...</option>
              <option>Action</option>
              <option>Comedy</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-5" controlId="formGridDesc">
            <Form.Control
              as="textarea"
              placeholder="Description"
              className="admin-add-movie-form"
            />
          </Form.Group>

          <Row className="mb-3">
            <Col xs={9}>
              <Form.Control
                placeholder="Title Episode"
                className="admin-add-movie-form"
              />
            </Col>
            <Col>
              <div className="d-flex">
                <Form.Control placeholder="Attach Thumbnail" />
                <img
                  src={Thumbnail}
                  width="15"
                  height="100%"
                  alt="Thumbnail"
                  className="mt-2 mx-1"
                />
              </div>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formGridLinkFilm">
            <Form.Control
              placeholder="Link Film"
              className="admin-add-movie-form"
            />
          </Form.Group>

          <Button
            className="admin-add-movie-btn-add btn-lg w-100 mb-3"
            variant="outline-light"
          >
            +
          </Button>

          <Button
            variant="danger"
            type="submit"
            className="admin-add-movie-button"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AdminAddMovies;
