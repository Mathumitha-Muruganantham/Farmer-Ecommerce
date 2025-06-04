import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Navigate, useNavigate } from "react-router-dom";
import Vegetables from "./Vegetables";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate();
  const products = [
    { name: "Vegetables", image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Fruits", image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Grains", image: "https://images.pexels.com/photos/17109241/pexels-photo-17109241/free-photo-of-seeds-for-sale-on-market.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Pulses", image: "https://images.pexels.com/photos/6086066/pexels-photo-6086066.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Poultry", image: "https://images.pexels.com/photos/1300375/pexels-photo-1300375.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Dairy", image: "https://images.pexels.com/photos/19025067/pexels-photo-19025067/free-photo-of-bottles-and-basket-on-a-farm.jpeg?auto=compress&cs=tinysrgb&w=400" },
   
  ];
  const Fertilizers = [
    { name: "Organic", image: "https://images.pexels.com/photos/3696170/pexels-photo-3696170.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Inorganic",image: "https://images.pexels.com/photos/25974981/pexels-photo-25974981/free-photo-of-person-hands-in-gloves-holding-bag-with-soil.jpeg?auto=compress&cs=tinysrgb&w=400" },
   
  ];
 const handlesubmit=(pagename)=>{
  navigate(`/${pagename}`);
 };

  return (
    <div className="bg-green-100">
      <Header />
      <br />
      {/* Featured Products Section */}
      
      <section className="px-6 py-20 text-green-900">
        <h2 className="text-3xl text-green-900 font-bold text-center mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl  mx-auto">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 border-4 border-green-900 rounded-lg shadow-md  transition-transform duration-300 hover:scale-110 text-center">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-3" />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-green-700 font-bold">{product.price}</p>
              <button className="mt-3 bg-green-600 px-4 py-2 text-white rounded-md hover:bg-green-800"onClick={()=>handlesubmit(product.name)}>
           Select
         </button>
            </div>
          ))}
        </div>
      </section>
      <br />
      <section className="px-6 py-20 text-green-900">
      <h2 className="text-3xl text-green-900 font-bold text-center mb-6">Fertilizers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl justify-center ma mx-auto">
        {Fertilizers.map((Fertilizer,index) => (
         <div key={index} className="bg-white p-6 border-4 border-green-900 rounded-lg shadow-md transition-transform duration-300 hover:scale-110 text-center">
         <img src={Fertilizer.image} alt={Fertilizer.name} className="w-full h-40 object-cover rounded-md mb-3" />
         <h3 className="text-xl font-semibold">{Fertilizer.name}</h3>
         <p className="text-green-700 font-bold">{Fertilizer.price}</p>
         <button className="mt-3 bg-green-600 px-4 py-2 text-white rounded-md hover:bg-green-800"onClick={()=>handlesubmit(Fertilizer.name)}>
           Select
         </button>
       </div>
        ))}
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
