import WelcomePage from "./Welcome/WelcomePage";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Choose from "./Welcome/choose";
import FarmerLogin from "./Login/FarmerLogin";
import FarmerRegister from "./Register/FarmerRegister";
import CustomerRegister from "./Register/CustomerRegister";
import CustomerLogin from "./Login/CustomerLogin";
import HomePage from "./Pages/HomePage";
import ForgetPassword from "./Login/ForgetPassword";
import Vegetables from "./Pages/Vegetables";
import Fruits from "./Pages/Fruits";
import Poultry from "./Pages/Poultry";
import Dairy from "./Pages/Dairy";
import Grains from "./Pages/Grains";
import Pulses from "./Pages/Pulses";
import Inorganic from "./Pages/Inorganic";
import Organic from "./Pages/Organic";

function App() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/Choose" element={<Choose />}></Route>
        <Route path="/FarmerRegister" element={<FarmerRegister />}></Route>
        <Route path="/CustomerRegister" element={<CustomerRegister />}></Route>
        <Route path="/FarmerLogin" element={<FarmerLogin />}></Route>
        <Route path="/CustomerLogin" element={<CustomerLogin />}></Route>
        <Route path="/HomePage" element={<HomePage />}></Route>
        <Route path="/ForgetPassword" element={<ForgetPassword />}></Route>
        <Route path="/Vegetables" element={<Vegetables />}></Route>
        <Route path="/Fruits" element={<Fruits />}></Route>
        <Route path="/Poultry" element={<Poultry />}></Route>
        <Route path="/Dairy" element={<Dairy />}></Route>
        <Route path="/Grains" element={<Grains />}></Route>
        <Route path="/Pulses" element={<Pulses />}></Route>
        <Route path="/Organic" element={<Organic />}></Route>
        <Route path="/Inorganic" element={<Inorganic />}></Route>
    
      </Routes>
    </Router>
  );
}

export default App;
