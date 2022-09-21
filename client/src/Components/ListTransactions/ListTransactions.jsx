import React from "react";
import Table from "react-bootstrap/Table";
import { Row, Col, Container } from "react-bootstrap";
import { useQuery, useMutation } from "react-query";
import { API } from "../../config/api";

import TopNavAdmin from "../Utility/TopNavAdmin";
import data from "../data/transaction.json";
import { ButtonAction } from "./ButtonAction";

function ListTransactions() {
  let { data: transactions } = useQuery("transactionsCache", async () => {
    const response = await API.get("/transactions");
    console.log(response.data.data);
    return response.data.data;
  });

  return (
    <Container fluid style={{ backgroundColor: "#2f2f2f", height: "100%" }}>
      <Row>
        <TopNavAdmin />
      </Row>

      <Row className="mt-5">
        <Col
          className="d-flex justify-content-center"
          style={{ margin: "auto", padding: "auto" }}
        >
          {transactions?.length !== 0 ? (
            <>
              <Table
                striped
                bordered
                hover
                variant="dark"
                style={{ width: "85%" }}
              >
                <thead className="text-danger fw-bold">
                  <tr>
                    <th>No</th>
                    <th>Users</th>
                    <th>Bukti Transfer</th>
                    <th>Remaining Active</th>
                    <th>Status Users</th>
                    <th>Status Payment</th>
                  </tr>
                </thead>

                <tbody>
                  {transactions?.map((item, id) => {
                    return (
                      <>
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.userId.fullname}</td>
                          <td>{item.attache}</td>
                          <td>X /Hari</td>
                          <td
                            className={
                              item.userId.subscribe !== "" &&
                              item.userId.subscribe !== "false"
                                ? "text-success"
                                : "text-danger"
                            }
                          >
                            {item.userId.subscribe !== "" &&
                            item.userId.subscribe !== "false"
                              ? "Active"
                              : "Inactive"}
                          </td>
                          <td
                            className={
                              item.status !== "" &&
                              item.status !== "Pending" &&
                              item.status !== "pending"
                                ? "text-success fw-bold"
                                : "text-warning fw-bold"
                            }
                          >
                            {item.status}
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table>
            </>
          ) : (
            <>
              {" "}
              <h3> No Transactions Yet!</h3>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default ListTransactions;
