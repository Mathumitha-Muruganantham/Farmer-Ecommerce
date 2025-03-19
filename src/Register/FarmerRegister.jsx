import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FarmerLogin from "../Login/FarmerLogin";
import HomePage from "../Pages/HomePage";
function FarmerRegister() {
  const navigate=useNavigate();
  const [name,setName]=useState("");
  const [error,setError]=useState("");
  const [phone,setPhone]=useState("");
  const [password,setPassword]=useState("");
  const handlesubmit=(event)=>{
      event.preventDefault();
    if(!/^[A-Za-z]{2,30}$/.test(name))
    {
        setError("Enter name correctly");
        alert("Enter name correctly");
        return;
    }
    if(!/^[0-9]{10}$/.test(phone))
    {
         setError("Enter number correctly");
        alert("Enter number correctly");
        return;
    }
  
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
      setError("Password must be at least 8 characters long, with uppercase, lowercase, a number, and a special character.");
      alert("Invalid password format");
      return;
    }
    setError("");
    alert("Successfully submitted");
    navigate("/HomePage");
    
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat px-6"
      style={{ backgroundImage: `url("https://i.pinimg.com/736x/e3/40/2b/e3402bc3a8ff044de0b17b3da0e50244.jpg")` }}
    >

      <div className="flex flex-col items-center justify-center gap-2 p-10 md:p-8 sm:p-6 bg-black bg-opacity-70 text-white rounded-lg w-[500px] max-w-full">
        <h1 className="text-white text-5xl mb-5 font-bold">Register</h1>

        <label className="text-lg sm:text-base mb-2 lg:text-4xl">Enter your name</label>
        <input type="text" value={name}  placeholder="Name" onChange={(e)=>setName(e.target.value)}
          className="w-full p-3 text-black rounded-md mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <label className="text-lg sm:text-base mb-2 lg:text-4xl">Enter your Number</label>
        <input type="tel" placeholder="Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)}
          className="w-full p-3 text-black rounded-md mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
       
        <label className="text-lg sm:text-base mb-2 lg:text-4xl">Enter your Password</label>
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 text-black rounded-md mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit"
          className="bg-green-500 text-white text-lg sm:text-base px-6 py-3 rounded-md w-full hover:bg-green-700 transition duration-300" onClick={handlesubmit}
        >
          Submit
        </button>
        
      <h1 className="text-2xl text-white hover:text-green-900 font-bold transition duration-300 text-right cursor-pointer" onClick={()=>navigate("/FarmerLogin")}>Already have an account</h1>
      </div>
    </div>
  );
}

export default FarmerRegister;
