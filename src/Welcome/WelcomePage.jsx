import React from "react";
import {useNavigate} from "react-router-dom";


const WelcomePage = () => {
    const navigate=useNavigate();
  return (
    <div
      className="h-screen w-screen bg-cover bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/e3/40/2b/e3402bc3a8ff044de0b17b3da0e50244.jpg')",
      }}
    >
      <div className="flex flex-col space-y-10 items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center shadow-white shadow-md w-[1000px] px-500 py-500">
          Welcome to Our Platform.It connects Customers and Farmers directly.
        </h1>
          <button className="bg-green-600 text-white text-2xl md:text-2xl px-20 py-6 font-bold  rounded-lg border-white border hover:bg-green-800 transition-all align-center"
          onClick={()=>navigate("/Choose")}>
            Get Started
          </button>
        </div>
      </div>
  );
};

export default WelcomePage;
