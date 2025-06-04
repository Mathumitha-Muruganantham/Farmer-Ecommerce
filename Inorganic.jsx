import React from 'react'
import Header from './Header';
import Footer from './Footer';
function Inorganic() {
    const inorganics=[
        {name:"Nitrogen based",price:"₹30/kg",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5uT3NrVrXsztjLpjyBvloOl6z0RuHJbA7Q&s"},
        {name:"Potassium based",price:"₹20/kg",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgqlYq0rSb5zYWLmcj1RbxlKL4lt4oBs30PA&s"},
        {name:"Micro nutrient",price:"₹35/kg",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsMyVO9_C9ExyrDgSSRUS2HtdGDToR5zPIww&s"},
        ]
    
  return (
    
      <div className="h-screen w-screen bg-green-100">
        <Header />
        <br />
        <h1 className='lg:text-4xl font-bold text-center'>Inorganic</h1>
        <section className='grid grid-cols-3 sd:grid-col-1 gap-4 px-10 py-20'>
            {inorganics.map((inorganic,index)=>(
             <div key={index} className='bg-white p-10 border-4 border-green-900 rounded-lg shadow-md  max-w-6xl transition-transform duration-300 hover:scale-110 text-center'>
             <img src={inorganic.img} alt={inorganics.name} className='w-full h-40 object-cover rounded-md mb-3'></img>
             <h3 className="text-xl font-semibold">{inorganic.name}</h3>
              <p className="text-green-700 font-bold">{inorganic.price}</p>
              <button className="mt-3 bg-green-600 px-4 py-2 text-white rounded-md hover:bg-green-800">Add to cart</button>
             </div>
            ))}
            
        </section>
        <Footer />
      </div>
    
  )
}

export default Inorganic;
