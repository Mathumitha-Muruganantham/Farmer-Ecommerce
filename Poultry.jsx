import React from 'react'
import Header from './Header';
import Footer from './Footer';
function Poultry() {
    const poultrys=[
        {name:"Egg",price:"₹30/kg",img:"https://images.pexels.com/photos/4207654/pexels-photo-4207654.jpeg?auto=compress&cs=tinysrgb&w=400"},
        {name:"Meat",price:"₹20/kg",img:"https://images.pexels.com/photos/7140316/pexels-photo-7140316.jpeg?auto=compress&cs=tinysrgb&w=400"},
        {name:"quil egg",price:"₹35/kg",img:"https://images.pexels.com/photos/6958019/pexels-photo-6958019.jpeg?auto=compress&cs=tinysrgb&w=400"},
        ]
    
  return (
    
      <div className="h-screen w-screen bg-green-100">
        <Header />
        <br />
        <h1 className='lg:text-4xl font-bold text-center'>Poultry</h1>
        <section className='grid grid-cols-3 sd:grid-col-1 gap-4 px-10 py-20'>
            {poultrys.map((poultry,index)=>(
             <div key={index} className='bg-white p-10 border-4 border-green-900 rounded-lg shadow-md  max-w-6xl transition-transform duration-300 hover:scale-110 text-center'>
             <img src={poultry.img} alt={poultrys.name} className='w-full h-40 object-cover rounded-md mb-3'></img>
             <h3 className="text-xl font-semibold">{poultry.name}</h3>
              <p className="text-green-700 font-bold">{poultry.price}</p>
              <button className="mt-3 bg-green-600 px-4 py-2 text-white rounded-md hover:bg-green-800">Add to cart</button>
             </div>
            ))}
            
        </section>
        <Footer />
      </div>
    
  )
}

export default Poultry;
