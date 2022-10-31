import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import * as Icon from "react-icons/fa";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import GlobalForm from "../Components/Atoms/Global-form";
import { API } from "../Components/Config/api";

function AddProduk() {

  let navigate = useNavigate();

  // const [product, setProduct] = useState([])

  const [preview, setPreview] = useState(null); //For image preview
  // const [product, setProduct] = useState([])
  const [form, setForm] = useState({
    image: "",
    title: "",
    price: "",
  }); //Store product 

  

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // // Configuration
      // const config = {
      //   headers: {
      //     "Content-type": "multipart/form-data",
      //     Accept: "application/json",
      //   },
      // };

      // Store data with FormData as object
      const formData = new FormData();
      formData.set('image', form.image[0], form.image[0].name);
      formData.set('title', form.title);
      formData.set('price', form.price);

      console.log(formData);

      // Insert product data
      const response = await API.post("/product", formData);
      console.log("ini respone",response.data);

      navigate('/Admin');
    } catch (error) {
      console.log("erornya",error);
    }
  });

  useEffect(() => {
    // getProduct();
  }, []);

  return (
    <>
      <Container>
        <div className="add-produk mt-5">
          <p className="fs-3 fw-bold">Add Produk</p>
          <Form onSubmit={(e) => handleSubmit.mutate(e)}>
            <Form.Group
              className="mb-3 d-md-flex gap-3"
              controlId="formBasicEmail"
            >
              <GlobalForm
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
              />
              <div
                style={{
                  width: "150px",
                  background: "yellow",
                }}
              >
                <label
                  className="text-white rounded py-2 px-2 d-flex justify-content-between align-items-center"
                  htmlFor="upload"
                  style={{
                    backgroundColor: "#433434",
                    height: "40px",
                    cursor: "pointer"
                  }}
                >
               
                  attach image <Icon.FaPaperclip />
                </label>
                <input
                  id="upload"
                  type="file" 
                  name="image"
                  onChange={handleChange}
                  hidden></input>
              </div>
            </Form.Group>
            <Form.Group className="mb-3 border-2" controlId="formBasicPassword">
              <GlobalForm
                type="number"
                name="price"
                placeholder="Price"
                onChange={handleChange}
              />
            </Form.Group>
            {preview && (
                <div className="mb-3">
                  <img
                    src={preview}
                    style={{
                      maxWidth: '150px',
                      maxHeight: '150px',
                      objectFit: 'cover',
                    }}
                    alt={preview}
                  />
                </div>
              )}
            <Form.Group className="mt-5 d-flex justify-content-md-end justify-content-center">
              <Button
                style={{ backgroundColor: "#433434", width: "200px" }}
                className="border-0"
                type="submit"
                // onClick={product}
              >
                Save
              </Button>
            </Form.Group>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default AddProduk;
