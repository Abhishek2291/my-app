import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const UpdateMedicine = () => {

    const data = JSON.parse(localStorage.getItem('medicine')) || []

    console.info("data+++ ",data)

  const onSubmitHandler = () => {};

  return (
    <div className="container d-flex justify-content-center">
      <div className="card col-md-4 p-4 my-4">
        <h4>Update Medicine</h4>
        <Form onSubmit={onSubmitHandler}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter title here..."
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              placeholder="Enter price here..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              name="quantity"
              placeholder="Enter quantity here..."
            />
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UpdateMedicine;
