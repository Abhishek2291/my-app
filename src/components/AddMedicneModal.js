import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddMedicneModal = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const values = {
        id : new Date().getTime(),
        name : event.target.name.value,
        price : event.target.price.value,
        quantity : event.target.quantity.value 
    }

    const data = JSON.parse(localStorage.getItem('medicine'));
    if(data){
      data.unshift(values)
      localStorage.setItem('medicine',JSON.stringify(data))
    }
    else{
      localStorage.setItem('medicine',JSON.stringify([values]))
    }

    setShow(false)
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Medicine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="Enter price here..."
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                placeholder="Enter quantity here..."
              />
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button type="button" variant="secondary" className="me-3" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary">Save Changes</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddMedicneModal;
