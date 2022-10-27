/* eslint-disable */ 
import React, { useContext } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import GlobalForm from "../Components/Atoms/Global-form";
import * as Icon from "react-icons/fa";
import { LoginContext } from "../context/DataContext";

function EditProfile() {
  const [dataLogin, dispatch] = useContext(LoginContext);

  // console.log(dataLogin);

  return (
    <>
      <Container>
        <div className="Edit-profile mt-5">
          {dataLogin.aslogin === "partner" ? (
            <p className="fs-3 fw-bold">Edit Profile Partner</p>
          ) : (
            <p className="fs-3 fw-bold">Edit Profile</p>
          )}
          <hr />
        </div>
        <Form>
          <Form.Group
            className="mb-3 d-md-flex gap-3"
            controlId="formBasicEmail"
          >
            <GlobalForm
              type="text"
              name="fullName"
              placeholder="Full Name"
              disabled
            />
            <button
              className="btn text-white mt-3 mt-md-0 d-flex justify-content-between align-items-center"
              style={{ backgroundColor: "#433434" }}
            >
              Select on map <Icon.FaPaperclip />
            </button>
          </Form.Group>
          <Form.Group className="mb-3 border-2" controlId="formBasicPassword">
            <GlobalForm type="text" name="email" placeholder="Email" disabled />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <GlobalForm type="text" name="phone" placeholder="Phone" disabled />
          </Form.Group>
          <Form.Group
            className="mb-3 d-md-flex gap-3"
            controlId="formBasicPassword"
          >
            <GlobalForm
              type="text"
              name="location"
              placeholder="Location"
              disabled
            />
            <button
              className="btn text-white mt-3 mt-md-0 d-flex gap-2 justify-content-center align-items-center"
              style={{ backgroundColor: "#433434" }}
            >
              Select on map <Icon.FaMapMarkedAlt />
            </button>
          </Form.Group>
          <Form.Group className="mt-5 d-flex justify-content-md-end justify-content-center">
            <Button
              style={{ backgroundColor: "#433434", width: "200px" }}
              className="border-0"
            >
              Save
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}

export default EditProfile;
