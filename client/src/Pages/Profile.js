/* eslint-disable */ 
import React, { useContext } from "react";
import "../Assets/styles/style.css";
import { Container } from "react-bootstrap";
import WaysFood from "../Assets/Image/Icon.png";
import ProfileImage from "../Assets/Image/User/Rectangle 12.png";
import { LoginContext } from "../context/DataContext";
// import { Users } from '../Data-Dummy/Users';
import { Link } from "react-router-dom";
// console.log(WaysFood);

function Profile() {
  const [dataLogin, dispatch] = useContext(LoginContext);
  // const DataUser = Users.find((person) => person.email === dataLogin.email);

  return (
    <>
      <Container>
        <div className="profile d-md-flex mt-5 gap-5">
          <div className="left w-100">
            {dataLogin.aslogin === "partner" ? (
              <p className="fw-bold fs-3">Profile Partner</p>
            ) : (
              <p className="fw-bold fs-3">My Profile</p>
            )}
            <hr />
            <div className="d-flex mt-3">
              <div className="img me-4">
                <img src={ProfileImage} alt="Me" className="rounded" />
              </div>
              <div className="detail">
                <div className="name">
                  <p>Full Name</p>
                  <span>Name</span>
                </div>
                <div className="email">
                  <p>Email</p>
                  <span>@mail</span>
                </div>
                <div className="phone">
                  <p>Phone</p>
                  <span>08xx</span>
                </div>
              </div>
            </div>
            <Link
              to="/EditProfile"
              className="btn-edit text-white fw-bold mt-3 p-2 rounded text-center"
            >
              {" "}
              Edit Profile
            </Link>
          </div>

          {dataLogin.aslogin === "partner" ? (
            <div className="right w-100 mt-5 mt-md-0">
              <p className="fw-bold fs-3">History Order</p>
              <hr />
              <div className="orders bg-light rounded p-4 d-md-flex mt-3">
                <div className="detail-orders w-100">
                  <p className="fs-4 fw-bold m-0">Andi</p>
                  <p className="m-0 mb-2">Saturday, 12 March 2021</p>
                  <p className="text-danger m-0">Total : Rp 45.000</p>
                </div>
                <div className="order-status w-100 mt-4 mt-md-0">
                  <img src={WaysFood} alt="logo" />
                  <div
                    className="status text-center text-success mt-3 p-2 fs-5 fw-bold"
                    style={{ backgroundColor: "#CDFCF6" }}
                  >
                    Finished
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="right w-100 mt-5 mt-md-0">
              <p className="fw-bold fs-3">History Transaction</p>
              <hr />
              <div className="orders bg-light rounded p-4 d-md-flex mt-3">
                <div className="detail-orders w-100">
                  <p className="fs-4 fw-bold m-0">Geprek Bensu</p>
                  <p className="m-0 mb-2">Saturday, 12 March 2021</p>
                  <p className="text-danger m-0">Total : Rp 45.000</p>
                </div>
                <div className="order-status w-100 mt-4 mt-md-0">
                  <img src={WaysFood} alt="logo" />
                  <div
                    className="status text-center text-success mt-3 p-2 fs-5 fw-bold"
                    style={{ backgroundColor: "#CDFCF6" }}
                  >
                    Finished
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </>
  );
}

export default Profile;
