import logo from './logo.svg';
import './App.css';

const App = () => {

  const emplist = [
    { full_name : 'admin' , favColor : [{ blue : true , red : true , white : true , black : true }] , mobile : 578455480},
    { full_name : 'admin2' , favColor : [{ blue : true , red : false , white : true , black : true }] , mobile : 478455485, study : { h_secondary : false , degree : true } },
    { full_name : 'admin3' , favColor : [{ blue : false , red : false , white : true , black : true }] , mobile : 578455482, study : { h_secondary : true , degree : false } },
    { full_name : 'admin4' , favColor : [{ blue : true , red : true , white : false , black : true }] , mobile : 378455485, study : { h_secondary : true , degree : true } },
    { full_name : 'admin5' , favColor : [{ blue : false , red : false , white : false , black : true }] , mobile : 87845548, study : { h_secondary : false , degree : true } },
    { full_name : 'admin6' , favColor : [{ blue : true , red : false , white : true , black : true }] , mobile : 578455486, study : { h_secondary : true , degree : true } },
    { full_name : 'admin7' , favColor : [{ blue : false , red : true , white : false , black : true }] , mobile : 278455485, study : { h_secondary : false , degree : false } },
  ]

  console.info("emplist++ ",emplist)

  return (
    <div className="content">

      <h1> Employee list </h1>

      <div className="App">
      <table >
        <thead>
          <tr>
            <th>id</th>
            <th>Full Name</th>
            <th>Mobile Number</th>
            <th>Higher secodary</th>
            <th>Graduation</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
            {
              emplist.map((i,index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{i.full_name}</td>
                    <td>{i.mobile}</td>
                    <td>{i?.study?.h_secondary === true ? 'Yes' : 'No'}</td>
                    <td>{i?.study?.degree === false ? 'No' : 'Yes'}</td>
                    <td>
                      {i?.favColor.map((color) => <span>{color.red === true ? 'red' : ''} <br /></span>)}
                      {i?.favColor.map((color) => <span>{color.blue === true ? 'blue' : ''}<br /></span>)}
                      {i?.favColor.map((color) => <span>{color.black === true ? 'black' : ''}</span>)}
                    </td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>
      </div>

    </div>
  );
}

export default App;
