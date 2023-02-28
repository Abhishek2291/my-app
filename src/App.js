import "./App.css";
import Header from "./Header";
// import Footer from './Footer'
// import Product from './components/Product'
// import ProductClass from './components/ProductClass';

const Text = ({ name }) => {
  return <div>This is {name}</div>;
};

const HOC = (WrapperComponent, color, backgroundColor) => {
  return (props) => (
    <div style={{ color: color, backgroundColor }}>
      <WrapperComponent {...props} />
    </div>
  );
};

const App = () => {
  const username = "Hotel";
  const data = ["Home", "About", "Contact"];
  const user = {
    name: "admin",
    email: "admin@admin.com",
  };

  const Comp = HOC(Text, "blue", "black");
  const Comp2 = HOC(Text, "red", "green");

  return (
    <div className="content">
      <Header user={user} data={data} name={username} />
      <Comp name="4546" />
      <Comp2 name="789" />
    </div>
  );
};

export default App;
