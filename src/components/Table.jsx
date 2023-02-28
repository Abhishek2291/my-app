import React from "react";

class Table extends React.Component {

    componentDidUpdate() {
        console.info("component update props")
    }

  render() {
    return (
      <div>
        <div className="App">
          <table id="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {this.props.mergedArray.map(
                ({ name, price, quantity, description }, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{name}</td>
                      <td>{price}</td>
                      <td>{quantity}</td>
                      <td>{description}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
