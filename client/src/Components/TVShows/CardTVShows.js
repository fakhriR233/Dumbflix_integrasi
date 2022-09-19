import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../config/api";
import cardImages from "../../Images/lacasa.png";

function CardTVShows(props) {
  // let Navigate = useNavigate()
  const [allFilm, setAllFilm] = useState([]);

  let { data: films } = useQuery("filmsCache", async () => {
    const response = await API.get("/films");
    //console.log(response.data.data);
    return response.data.data;
  });

  useEffect(() => {
    setAllFilm(
      films
        ?.filter((item) => item?.category_id === 2)
        .map(
          ({
            id,
            category,
            category_id,
            description,
            thumbnailfilm,
            title,
            year,
          }) => ({
            id,
            category,
            category_id,
            description,
            thumbnailfilm,
            title,
            year,
          })
        )
    );

    //console.log(allFilm);
  }, [films]);

  return (
    <div style={{ backgroundColor: "#000" }}>
      <Container>
        <h2 className="mt-4">{props.category}</h2>
        {allFilm?.length !== 0 && allFilm?.length !== [] ? (
          <>
            <Row xs={1} md={5} className="g-5 py-3">
              {allFilm?.map((item, id) => {
                return (
                  <>
                    <Link
                      to={"/moviesdetails/" + item.id}
                      style={{ textDecoration: "none" }}
                      className="me-3"
                    >
                      <Col>
                        <Card style={{ backgroundColor: "#000" }}>
                          <Card.Img
                            style={{
                              width: "11rem",
                              height: "15rem",
                              objectFit: "cover",
                            }}
                            variant="top"
                            src={item.thumbnailfilm}
                          />
                          <Card.Body
                            className="pt-3 px-0"
                            style={{ color: "white" }}
                          >
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text className="text-muted">
                              {item.year}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Link>
                  </>
                );
              })}
            </Row>
          </>
        ) : (
          <>
            {" "}
            <h2 className="pt-2"> No TV Shows Yet...</h2>
          </>
        )}
      </Container>
    </div>
  );
}

export default CardTVShows;
