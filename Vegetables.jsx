import React from 'react'
import Header from './Header';
import Footer from './Footer';
function Vegetables() {
    const vegetables=[
        {name:"Tomato",price:"₹30/kg",img:"https://images.pexels.com/photos/19689768/pexels-photo-19689768/free-photo-of-juicy-tomatoes-on-market.jpeg?auto=compress&cs=tinysrgb&w=400"},
        {name:"Potato",price:"₹20/kg",img:"https://images.pexels.com/photos/7129145/pexels-photo-7129145.jpeg?auto=compress&cs=tinysrgb&w=400"},
        {name:"Onion",price:"₹35/kg",img:"https://images.pexels.com/photos/7129153/pexels-photo-7129153.jpeg?auto=compress&cs=tinysrgb&w=400"},
        {name:"Beans",price:"₹40/kg",img:"https://images.pexels.com/photos/15429029/pexels-photo-15429029/free-photo-of-green-peas-in-close-up-shot.jpeg?auto=compress&cs=tinysrgb&w=400"},
        {name:"Carrot",price:"₹20/kg",img:"https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg?auto=compress&cs=tinysrgb&w=400"},
        {name:"Brinjal",price:"₹30/kg",img:"https://images.pexels.com/photos/5529949/pexels-photo-5529949.jpeg?auto=compress&cs=tinysrgb&w=400"},

    ]
    
  return (
    
      <div className="bg-green-100">
        <Header />
        <br />
        <h1 className='lg:text-4xl font-bold text-center'>Vegetables</h1>
        <section className='grid grid-cols-3 sd:grid-col-1 gap-4 px-10 py-20'>
            {vegetables.map((vegetable,index)=>(
             <div key={index} className='bg-white p-10 border-4 border-green-900 rounded-lg shadow-md  max-w-6xl transition-transform duration-300 hover:scale-110 text-center'>
             <img src={vegetable.img} alt={vegetables.name} className='w-full h-40 object-cover rounded-md mb-3'></img>
             <h3 className="text-xl font-semibold">{vegetable.name}</h3>
              <p className="text-green-700 font-bold">{vegetable.price}</p>
              <button className="mt-3 bg-green-600 px-4 py-2 text-white rounded-md hover:bg-green-800">Add to cart</button>
             </div>
            ))}
            
        </section>
        <Footer />
      </div>
    
  )
}

export default Vegetables;
