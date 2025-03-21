import React from 'react'
import Header from './Header';
import Footer from './Footer';
function Fruits() {
    const fruits=[
        {name:"Apple",price:"₹30/kg",img:"https://images.pexels.com/photos/209439/pexels-photo-209439.jpeg?auto=compress&cs=tinysrgb&w=400"},
        {name:"Orange",price:"₹20/kg",img:"https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&w=400"},
        {name:"Grapes",price:"₹35/kg",img:"https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=400"},
        {name:"Guava",price:"₹40/kg",img:"https://images.pexels.com/photos/4105727/pexels-photo-4105727.jpeg?auto=compress&cs=tinysrgb&w=400"},
        {name:"Banana",price:"₹20/kg",img:"https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=400"},
        {name:"Jackfruit",price:"₹30/kg",img:"https://media.istockphoto.com/id/1326743665/photo/jackfruit-with-green-leaf-background.jpg?b=1&s=612x612&w=0&k=20&c=gpe_8K0oj6m_P6d-dvaRI2TNs4KIjm4EbntXM2x3Hb8="},

    ]
    
  return (
    
      <div className="bg-green-100">
        <Header />
        <br />
        <h1 className='lg:text-4xl font-bold text-center'>Fruits</h1>
        <section className='grid grid-cols-3 sd:grid-col-1 gap-4 px-10 py-20'>
            {fruits.map((fruit,index)=>(
             <div key={index} className='bg-white p-10 border-4 border-green-900 rounded-lg shadow-md  max-w-6xl transition-transform duration-300 hover:scale-110 text-center'>
             <img src={fruit.img} alt={fruits.name} className='w-full h-40 object-cover rounded-md mb-3'></img>
             <h3 className="text-xl font-semibold">{fruit.name}</h3>
              <p className="text-green-700 font-bold">{fruit.price}</p>
              <button className="mt-3 bg-green-600 px-4 py-2 text-white rounded-md hover:bg-green-800">Add to cart</button>
             </div>
            ))}
            
        </section>
        <Footer />
      </div>
    
  )
}

export default Fruits;
