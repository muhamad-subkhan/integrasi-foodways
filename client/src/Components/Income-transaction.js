/* eslint-disable no-console, no-control-regex*/
import React from "react";
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
// import * as Icon from "react-icons/fa";
import "../Assets/styles/style.css";
import { Container } from "react-bootstrap";

function Incometransaction() {
  return (
    <>
      <Container>
        <div className="income mt-5">
          <h1 className="fw-bold">Income Transaction</h1>
          <table className="table">
            <thead>
            <tr className="bg-secondary text-center">
              <th className="border border-dark">No</th>
              <th className="border border-dark">Name</th>
              <th className="border border-dark">Address</th>
              <th className="border border-dark">Products Order</th>
              <th className="border border-dark">Status</th>
            </tr>
            </thead>

            <tbody>
              <tr className="text-center">
              <td className="border border-dark">1</td>
              <td className="border border-dark">Sugeng No Pants</td>
              <td className="border border-dark">Cileungsi</td>
              <td className="border border-dark">Pkaket Geprek, Paket ke..</td>
              <td className="border border-dark text-warning">Waiting Approve</td>
              </tr>
            </tbody>
            
            <tbody>
              <tr className="text-center">
              <td className="border border-dark">2</td>
              <td className="border border-dark">Haris Gams</td>
              <td className="border border-dark">Serang </td>
              <td className="border border-dark">Pkaket Geprek, Paket ke..</td>
              <td className="border border-dark text-success">Success</td>
              </tr>
            </tbody>

            <tbody>
              <tr className="text-center">
              <td className="border border-dark">3</td>
              <td className="border border-dark">Aziz Union</td>
              <td className="border border-dark">Bekasi</td>
              <td className="border border-dark">Pkaket Geprek, Paket ke..</td>
              <td className="border border-dark text-danger">Cancel</td>
              </tr>
            </tbody>

            <tbody>
              <tr className="text-center">
              <td className="border border-dark">4</td>
              <td className="border border-dark">Lae Tanjung Balai</td>
              <td className="border border-dark">Tanjung Balai</td>
              <td className="border border-dark">Pkaket Geprek, Paket ke..</td>
              <td className="border border-dark text-primary">On The Way</td>
              </tr>
            </tbody>

          </table>
        </div>
      </Container>
    </>
  );
}

export default Incometransaction;
