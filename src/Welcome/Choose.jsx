import React from "react";
import { useNavigate } from "react-router-dom";

const Choose = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-cover bg-center flex flex-col items-center justify-center" 
         style={{ backgroundImage: `url("https://i.pinimg.com/736x/e3/40/2b/e3402bc3a8ff044de0b17b3da0e50244.jpg")` }}>
      
      {/* Title */}
      <h1 className="text-4xl md:text-3xl lg:text-6xl font-bold text-white text-left shadow-2xl px-6 py-3 rounded-lg"
      style={{textShadow:"0px 0px 50px white"}}>
        Welcome to Agri E-commerce
      </h1>

      {/* Button Container */}
      <div className="mt-8 flex flex-col items-center justify-center gap-6 p-6 bg-black bg-opacity-70 rounded-xl w-[500px] h-[500px]">
        <button 
          className="bg-green-500 text-white text-4xl px-8 py-4 border-black border-4 rounded-md w-60 hover:bg-green-900 transition duration-300"
          onClick={() => navigate("/FarmerRegister")}>
          Farmer
        </button>
        <button 
          className="bg-green-500 text-white text-4xl px-8 py-4 border-black border-4 rounded-md w-60 hover:bg-green-900 transition duration-300"
          onClick={() => navigate("/CustomerRegister")}>
          Customer
        </button>
      </div>
      
    </div>
  );
};

export default Choose;
