import './App.css';

const App = () => {

  const cart = [
    { name : 'p1' , price : 600 , quantity : 5 , description : 'd1' },
    { name : 'p2' , price : 650 , quantity : 2 , description : 'd2' },
    { name : 'p4' , price : 51 , quantity : 8 , description : 'd3' },
    { name : 'p5' , price : 6540 , quantity : 100 , description : 'd4' },
    { name : 'p6' , price : 542 , quantity : 51 , description : 'd5' },
    { name : 'p7' , price : 212 , quantity : 872 , description : 'd6' },
    { name : 'p8' , price : 218 , quantity : 125 , description : 'd7' },
    { name : 'p9' , price : 872 , quantity : 542 , description : 'd8' },
    { name : 'p10' , price : 7825 , quantity : 8752 , description : 'd9' },
    { name : 'd10' , price : 54 , quantity : 78 , description : 'd10' },
  ]

  const totalQuantity = cart.reduce((acc , curr ) => {
    return acc + curr.quantity
  } , 0)

  const totalPrice = cart.reduce((acc , curr ) => {
    return acc + (curr.price * curr.quantity)
  } , 0)


  return (
    <div className="content">

      <h1> products </h1>

      <div className="App">

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {
             cart.map((i , index) => {
              return (
                <tr>
                  <td>{index + 1 }</td>
                  <td>{i?.name}</td>
                  <td>{i?.price}</td>
                  <td>{i?.quantity}</td>
                  <td>{i?.description}</td>
                  <td>{i?.quantity * i?.price}</td>
                </tr>
              )
            })
          }
          <tr>
            <td><b>Total</b></td>
            <td colSpan={4}>{totalQuantity}</td>
            <td colSpan={4}>{totalPrice}</td>
          </tr>
        </tbody>
      </table>

      </div>

    </div>
  );
}

export default App;
