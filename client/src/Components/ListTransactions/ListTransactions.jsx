import React from "react";
import Table from "react-bootstrap/Table";
import { Row, Col, Container } from "react-bootstrap";
import TopNavAdmin from "../Utility/TopNavAdmin";
import { ButtonAction } from "./ButtonAction";
import data from "../data/transaction.json";

function ListTransactions() {
  return (
    <Container fluid style={{ backgroundColor: "#2f2f2f", height: "100vh" }}>
      <Row>
        <TopNavAdmin />
      </Row>

      <Row className="mt-5">
        <Col
          className="d-flex justify-content-center"
          style={{ margin: "auto", padding: "auto" }}
        >
          <Table striped bordered hover variant="dark" style={{ width: "85%" }}>
            <thead className="text-danger fw-bold">
              <tr>
                <th>No</th>
                <th>Users</th>
                <th>Bukti Transfer</th>
                <th>Remaining Active</th>
                <th>Status Users</th>
                <th>Status Payment</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data?.map((item, id) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.proof}</td>
                    <td>{item.hari}/Hari</td>
                    <td className="text-success">{item.memberstatus}</td>
                    <td className="text-success fw-bold">
                      {item.transactionstatus}
                    </td>
                    <td>
                      <ButtonAction />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default ListTransactions;
