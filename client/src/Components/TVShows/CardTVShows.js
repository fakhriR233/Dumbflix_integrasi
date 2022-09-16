import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import cardImages from "../../Images/lacasa.png";

function CardTVShows() {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <Container>
        <Row>
          <h5 className="my-4 text-white">TV Shows</h5>
          <Col sm={6} md={3} className="my-3">
            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              <Card>
                <Card.Img src={cardImages} className="mb-3" />
                <Card.Body>
                  <h3>Title Movies</h3>
                  <p className="text-muted">2019</p>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col sm={6} md={3} className="my-3">
            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              <Card>
                <Card.Img src={cardImages} className="mb-3" />
                <Card.Body>
                  <h3>Title Movies</h3>
                  <p className="text-muted">2019</p>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col sm={6} md={3} className="my-3">
            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              <Card>
                <Card.Img src={cardImages} className="mb-3" />
                <Card.Body>
                  <h3>Title Movies</h3>
                  <p className="text-muted">2019</p>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col sm={6} md={3} className="my-3">
            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              <Card>
                <Card.Img src={cardImages} className="mb-3" />
                <Card.Body>
                  <h3>Title Movies</h3>
                  <p className="text-muted">2019</p>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CardTVShows;
