import "./App.css";
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
import Layout from "./components/Layout";
import Medicine from "./Pages/Medicine";
import UpdateMedicine from "./Pages/UpdateMedicine";

const App = (props) => {

  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>}  />
        <Route path="/medicines" element={<Layout><Medicine /></Layout>}  />
        <Route path="/update-medicine" element={<Layout><UpdateMedicine /></Layout>}  />
        <Route path="/contact" element={<Layout><Contact /></Layout>}  />
        <Route path="/appoinment" element={<Layout><Appoinment /></Layout>}  />
        <Route path="/department" element={<Layout><Department /></Layout>}  />
        <Route path="/doctors" element={<Layout><Doctors /></Layout>}  />
        <Route path="/login" element={<Login />}  />
      </Routes>
    </div>
  );
};

export default App;
