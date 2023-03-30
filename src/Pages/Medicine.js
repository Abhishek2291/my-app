import { useState , useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import AddMedicneModal from "../components/AddMedicneModal";

const Medicine = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [data, setdata] = useState(JSON.parse(localStorage.getItem("medicine")) || [])

  const onClickAddMedicine = () => {
    setShow(true);
  };

  const onClickDelete = (id) => {
    const filter = data.filter((i) => id !== i.id)
    localStorage.setItem('medicine',JSON.stringify(filter))
    setdata(filter)
  }

  const onClickEdit = (id) => {
    navigate(`/update-medicine`)
  }

  const getData = () => {
    const res = (JSON.parse(localStorage.getItem("medicine")) || [])
    setdata(res)
  }

  useEffect(() => {
    getData()
  }, [show])
  
  
  return (
    <>
      <AddMedicneModal show={show} setShow={setShow} />
      <div className="container py-5">
        <Button onClick={onClickAddMedicine} variant="success" className="my-3">
          Add Medicine
        </Button>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((i) => {
                return (
                  <tr>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.price}</td>
                    <td>{i.quantity}</td>
                    <td><Button onClick={() => onClickEdit(i.id)} variant="success">Edit</Button></td>
                    <td><Button onClick={() => onClickDelete(i.id)} variant="danger">Delete</Button></td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Medicine;
