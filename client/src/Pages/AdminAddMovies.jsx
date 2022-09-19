import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import TopNavbarAdmin from "../Components/Utility/TopNavAdmin";
import Thumbnail from "../Images/Icons/Attachment.png";
import { useMutation, useQuery } from "react-query";

import { API } from "../config/api";
import { Alert } from "react-bootstrap";

const AdminAddMovies = () => {
  let Navigate = useNavigate();

  const title = " Admin Add Movies";
  document.title = "Dumbflix | " + title;

  const [categoryId, setCategoryId] = useState([]);

  const [form, setForm] = useState({
    Title: "",
    ThumbnailFilm: "",
    Year: "",
    CategoryID: "",
    Description: "",
  });

  let { data: categories, refetch } = useQuery("categoriesCache", async () => {
    const response = await API.get("/categories");
    console.log(response.data.data);
    return response.data.data;
  });

  useEffect(() => {
    setCategoryId(categories);
    // console.log(categoryId[0]?.id);
  }, [categories]);

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    console.log("test onchange");
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
    console.log(form);
  };

  const addButtonHandler = useMutation(async (e) => {
    try {
      e.preventDefault();

      if (form.CategoryID === "") {
        setForm({ ...form, CategoryID: categoryId[0]?.id });
      }
      // console.log(form);

      const formData = new FormData();
      formData.set(
        "ThumbnailFilm",
        form?.ThumbnailFilm[0],
        form?.ThumbnailFilm[0]?.name
      );
      formData.set("Title", form.Title);
      formData.set("Description", form.Description);
      formData.set("Year", form.Year);
      formData.set("CategoryID", form.CategoryID);

      console.log(form);
      // Configuration Content-type
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      // Data body
      // const body = JSON.stringify(formData);

      // Insert data user to database
      const response = await API.post("/film", formData, config);
      Navigate("/addlistpage");

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
      {message && message}
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
                name="Title"
                onChange={handleChange}
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
                  name="ThumbnailFilm"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formGridYear">
            <Form.Control
              placeholder="Year"
              className="admin-add-movie-form"
              name="Year"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridCategory">
            <Form.Select
              // defaultValue={1}
              className="admin-add-movie-form"
              name="CategoryID"
              onChange={handleChange}
            >
              <option>...</option>
              {categories?.map((item) => (
                <option value={item?.id}>{item?.name}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-5" controlId="formGridDesc">
            <Form.Control
              as="textarea"
              placeholder="Description"
              className="admin-add-movie-form"
              name="Description"
              onChange={handleChange}
            />
          </Form.Group>

          {/* <Row className="mb-3">
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
          </Button> */}

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
