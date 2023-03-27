import { useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import AddMedicneModal from "../components/AddMedicneModal";

const Medicine = () => {

  const [show, setShow] = useState(false);

  const onClickAddMedicine = () => {
    setShow(true)
  };

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
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Medicine;
