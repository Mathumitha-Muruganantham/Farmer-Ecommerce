import React from 'react'
import Header from './Header';
import Footer from './Footer';
function Pulses() {
    const pulses=[
        {name:"Toor Dal",price:"₹30/kg",img:"https://media.istockphoto.com/id/1406048781/photo/yellow-toor-dal-for-making-dal-tadka-indian-pulses-isolated-black-background.jpg?s=1024x1024&w=is&k=20&c=e8dIXZBd_9wcy7Ik8k00mmD8zpCk5nCQiOAyYXwDz44="},
        {name:"Green Gram",price:"₹20/kg",img:"https://images.pexels.com/photos/7420816/pexels-photo-7420816.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {name:"Kidney Bean",price:"₹35/kg",img:"https://images.pexels.com/photos/6316671/pexels-photo-6316671.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {name:"Moth Beans",price:"₹40/kg",img:"https://media.istockphoto.com/id/1278718462/photo/moth-beans-or-matki-beans-in-women-hand-on-white-background.jpg?s=1024x1024&w=is&k=20&c=HNUHVe2m_UjetQwJhvQGhPKvSjfcnq0b6bwmoCG_RaU="},
        {name:"White lentil",price:"₹20/kg",img:"https://th.bing.com/th/id/OIP.5Rx4rrY9sIgRwyoWHjgklQHaE8?w=251&h=180&c=7&r=0&o=5&pid=1.7"},
        {name:"Chick Peas",price:"₹30/kg",img:"https://media.istockphoto.com/id/647289202/photo/chickpeas-in-a-bowl.jpg?s=1024x1024&w=is&k=20&c=D-_aMkIdKR7WV7S0VT-dUeiOFXKLz4cx5rjLBhyCoZo="},

    ]
    
  return (
    
      <div className="bg-green-100">
        <Header />
        <br />
        <h1 className='lg:text-4xl font-bold text-center'>Pulses</h1>
        <section className='grid grid-cols-3 sd:grid-col-1 gap-4 px-10 py-20'>
            {pulses.map((pulse,index)=>(
             <div key={index} className='bg-white p-10 border-4 border-green-900 rounded-lg shadow-md  max-w-6xl transition-transform duration-300 hover:scale-110 text-center'>
             <img src={pulse.img} alt={pulses.name} className='w-full h-40 object-cover rounded-md mb-3'></img>
             <h3 className="text-xl font-semibold">{pulse.name}</h3>
              <p className="text-green-700 font-bold">{pulse.price}</p>
              <button className="mt-3 bg-green-600 px-4 py-2 text-white rounded-md hover:bg-green-800">Add to cart</button>
             </div>
            ))}
            
        </section>
        <Footer />
      </div>
    
  )
}

export default Pulses;
