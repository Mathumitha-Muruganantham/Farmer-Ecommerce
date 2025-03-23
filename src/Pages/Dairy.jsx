import React from 'react'
import Header from './Header';
import Footer from './Footer';
function Dairy() {
    const dairys=[
        {name:"Milk",price:"₹30/L",img:"https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=400"},
        {name:"Paneer",price:"₹20/500mg",img:"https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
        {name:"Ghee",price:"₹35/500ml",img:"https://images.pexels.com/photos/20689447/pexels-photo-20689447/free-photo-of-bowls-with-liquid-and-food-ingredients.jpeg?auto=compress&cs=tinysrgb&w=300"},
        {name:"Buttermilk",price:"₹40/500ml",img:"https://images.pexels.com/photos/15522898/pexels-photo-15522898/free-photo-of-two-cups-of-milk-with-straws-on-a-counter.jpeg?auto=compress&cs=tinysrgb&w=300"},
        {name:"Cream",price:"₹20/500ml",img:"https://images.pexels.com/photos/1006297/pexels-photo-1006297.jpeg?auto=compress&cs=tinysrgb&w=400"},
        {name:"Curd",price:"₹30/50ml",img:"https://media.istockphoto.com/id/1326743665/photo/jackdairy-with-green-leaf-background.jpg?b=1&s=612x612&w=0&k=20&c=gpe_8K0oj6m_P6d-dvaRI2TNs4KIjm4EbntXM2x3Hb8="},

    ]
    
  return (
    
      <div className="bg-green-100">
        <Header />
        <br />
        <h1 className='lg:text-4xl font-bold text-center'>dairys</h1>
        <section className='grid grid-cols-3 sd:grid-col-1 gap-4 px-10 py-20'>
            {dairys.map((dairy,index)=>(
             <div key={index} className='bg-white p-10 border-4 border-green-900 rounded-lg shadow-md  max-w-6xl transition-transform duration-300 hover:scale-110 text-center'>
             <img src={dairy.img} alt={dairys.name} className='w-full h-40 object-cover rounded-md mb-3'></img>
             <h3 className="text-xl font-semibold">{dairy.name}</h3>
              <p className="text-green-700 font-bold">{dairy.price}</p>
              <button className="mt-3 bg-green-600 px-4 py-2 text-white rounded-md hover:bg-green-800">Add to cart</button>
             </div>
            ))}
            
        </section>
        <Footer />
      </div>
    
  )
}

export default Dairy;
