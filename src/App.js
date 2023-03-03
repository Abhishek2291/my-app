import "./App.css";
import Header from "./Header";
import Footer from './Footer'
import Product from './components/Product'
import {
  Routes,
  Route,
} from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Appoinment from "./Pages/Appoinment";
import Department from "./Pages/Department";
import Doctors from "./Pages/Doctors";

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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}  />
        <Route path="/contact" element={<Contact />}  />
        <Route path="/appoinment" element={<Appoinment />}  />
        <Route path="/department" element={<Department />}  />
        <Route path="/doctors" element={<Doctors />}  />
      </Routes>
    </div>
  );
};

export default App;
