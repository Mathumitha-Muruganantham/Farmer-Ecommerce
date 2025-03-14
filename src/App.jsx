import WelcomePage from "./Welcome/WelcomePage";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Choose from "./Welcome/choose";
import FarmerRegister from "./Register/FarmerRegister";
import FarmerLogin from "./Login/FarmerLogin";
import CustomerRegister from "./Register/CustomerRegister";
import CustomerLogin from "./Login/CustomerLogin";
import HomePage from "./Pages/HomePage";
import ForgetPassword from "./Login/ForgetPassword";

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
        <Route path="/Home" element={<HomePage />}></Route>
        <Route path="/ForgetPassword" element={<ForgetPassword />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
