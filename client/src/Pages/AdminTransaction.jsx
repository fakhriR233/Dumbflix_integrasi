import React from "react";
import Table from "react-bootstrap/Table";
import Polygon from "../Images/Icons/Polygon Transaction.png";

const AdminTransaction = () => {
  return (
    <>
      <div className="admin-transaction-body">
        <div className="admin-transaction-container">
          <Table
            striped
            bordered
            hover
            variant="dark"
            className="mx-auto admin-table-transaction"
          >
            <thead>
              <tr className="admin-table-title">
                <th>No</th>
                <th>Users</th>
                <th>Bukti Transfer</th>
                <th>Remaining Active</th>
                <th>Status User</th>
                <th>Status Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>bca.jpg</td>
                <td>28 / Hari</td>
                <td>Active</td>
                <td>Approve</td>
                <td className="text-center">
                  <img
                    src={Polygon}
                    alt="Polygon"
                    className="admin-icon-polygon"
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default AdminTransaction;
