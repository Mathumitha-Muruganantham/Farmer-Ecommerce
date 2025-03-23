import React from 'react'
import Header from './Header';
import Footer from './Footer';
function Grains() {
    const grains=[
        {name:"Rice",price:"₹30/kg",img:"https://images.pexels.com/photos/4187615/pexels-photo-4187615.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {name:"Wheat",price:"₹20/kg",img:"https://images.pexels.com/photos/54084/wheat-grain-agriculture-seed-54084.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {name:"Maize",price:"₹35/kg",img:"https://images.pexels.com/photos/60507/maize-corn-indian-corn-vegetables-60507.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {name:"Oats",price:"₹40/kg",img:"https://images.pexels.com/photos/7421197/pexels-photo-7421197.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {name:"Red rice",price:"₹20/kg",img:"https://images.pexels.com/photos/6086557/pexels-photo-6086557.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {name:"Black rice",price:"₹30/kg",img:"https://images.pexels.com/photos/30756211/pexels-photo-30756211/free-photo-of-close-up-of-organic-black-rice-from-indonesia.jpeg?auto=compress&cs=tinysrgb&w=600"},

    ]
    
  return (
    
      <div className="bg-green-100">
        <Header />
        <br />
        <h1 className='lg:text-4xl font-bold text-center'>Grains</h1>
        <section className='grid grid-cols-3 sd:grid-col-1 gap-4 px-10 py-20'>
            {grains.map((grain,index)=>(
             <div key={index} className='bg-white p-10 border-4 border-green-900 rounded-lg shadow-md  max-w-6xl transition-transform duration-300 hover:scale-110 text-center'>
             <img src={grain.img} alt={grains.name} className='w-full h-40 object-cover rounded-md mb-3'></img>
             <h3 className="text-xl font-semibold">{grain.name}</h3>
              <p className="text-green-700 font-bold">{grain.price}</p>
              <button className="mt-3 bg-green-600 px-4 py-2 text-white rounded-md hover:bg-green-800">Add to cart</button>
             </div>
            ))}
            
        </section>
        <Footer />
      </div>
    
  )
}

export default Grains;
