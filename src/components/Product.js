import React from "react";

const Product = (props) => {
  const cart = [
    { name: "p1", price: 600, quantity: 5, description: "d1" },
    { name: "p2", price: 650, quantity: 2, description: "d2" },
    { name: "p4", price: 51, quantity: 8, description: "d3" },
    { name: "p5", price: 6540, quantity: 100, description: "d4" },
    { name: "p6", price: 542, quantity: 51, description: "d5" },
  ];

  const cart2 = [
    { name: "p7", price: 212, quantity: 872, description: "d6" },
    { name: "p8", price: 218, quantity: 125, description: "d7" },
    { name: "p9", price: 872, quantity: 542, description: "d8" },
    { name: "p10", price: 7825, quantity: 8752, description: "d9" },
    { name: "d10", price: 54, quantity: 78, description: "d10" },
  ];

  const mergedArray = [...cart, ...cart2];



  return (
    <div>
      <h1>{props.username} </h1>
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
            {mergedArray.map(
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
};

export default Product;
