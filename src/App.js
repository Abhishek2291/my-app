import "./App.css";
import Header from "./Header";
import Footer from './Footer'
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
import Login from "./Pages/Login";

const App = () => {

  return (
    <div className="content">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}  />
        <Route path="/contact" element={<Contact />}  />
        <Route path="/appoinment" element={<Appoinment />}  />
        <Route path="/department" element={<Department />}  />
        <Route path="/doctors" element={<Doctors />}  />
        <Route path="/login" element={<Login />}  />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
