import "./App.css";
import Header from "./Header";
import Footer from './Footer'
import Product from './components/Product'
import ProductClass from './components/ProductClass';
import {
  Routes,
  Route,
} from "react-router-dom";
const App = () => {
  const username = "Hotel";
  const data = ["Home", "About", "Contact"];
  const user = {
    name: "admin",
    email: "admin@admin.com",
  };

  return (
    <div className="content">
      <Routes>
        <Route path="/" />
      </Routes>
      <Header user={user} data={data} name={username} />
      <Product />
      <Footer />
    </div>
  );
};

export default App;
