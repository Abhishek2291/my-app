import React, { Component } from "react";
import Table from "./Table";

class ProductClass extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name : 'Hotel',
      email : 'hotel@admin.com'
    }
  }
  
  
  componentDidMount() {
    console.info("component mounted")
  }


  componentDidUpdate() {
    console.info("component updated state")
  }
  
  componentWillUnmount() {
    console.info("component unmount")
  }
  


  cart = [
    { name: "p1", price: 600, quantity: 5, description: "d1" },
    { name: "p2", price: 650, quantity: 2, description: "d2" },
    { name: "p4", price: 51, quantity: 8, description: "d3" },
    { name: "p5", price: 6540, quantity: 100, description: "d4" },
    { name: "p6", price: 542, quantity: 51, description: "d5" },
  ];

  cart2 = [
    { name: "p7", price: 212, quantity: 872, description: "d6" },
    { name: "p8", price: 218, quantity: 125, description: "d7" },
    { name: "p9", price: 872, quantity: 542, description: "d8" },
    { name: "p10", price: 7825, quantity: 8752, description: "d9" },
    { name: "d10", price: 54, quantity: 78, description: "d10" },
  ];

  mergedArray = [...this.cart, ...this.cart2];


  onClickHander = () => {
    this.setState({ name : 'hotel2' , email : 'admin@admin.com' })
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.state.email}</h1>

        <button onClick={this.onClickHander}>click Here !!</button>
        <Table mergedArray={this.mergedArray}  />
      </div>
    );
  }
}

export default ProductClass;
