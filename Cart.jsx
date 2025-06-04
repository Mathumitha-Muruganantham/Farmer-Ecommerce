


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentPage from './PaymentPage';


const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 25.99, quantity: 1 },
    { id: 2, name: 'Product 2', price: 15.49, quantity: 2 },
    { id: 3, name: 'Product 3', price: 42.99, quantity: 1 },
  ]);
 const navigate = useNavigate();
  const handleIncrease = (id) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };


  const handleDecrease = (id) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };


  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };


  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

   const handleProceedToCheckout = () => {
    navigate('/PaymentPage'); // Navigate to Payment Page
  };


  return (
    <div className="bg-green-100 min-h-screen flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Shopping Cart</h1>


        {cartItems.length === 0 ? (
          <p className="text-xl text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b border-gray-300 py-4">
                <div className="flex items-center">
                  <img src={`https://via.placeholder.com/60`} alt={item.name} className="mr-4 w-16 h-16 object-cover" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-lg text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>


                <div className="flex items-center">
                  <button
                    className="px-4 py-2 text-sm bg-gray-300 text-black rounded-full mr-2"
                    onClick={() => handleDecrease(item.id)}
                  >
                    -
                  </button>
                  <span className="text-lg text-gray-800">{item.quantity}</span>
                  <button
                    className="px-4 py-2 text-sm bg-gray-300 text-black rounded-full ml-2"
                    onClick={() => handleIncrease(item.id)}
                  >
                    +
                  </button>
                </div>


                <div className="flex items-center">
                  <button
                    className="text-red-500 hover:text-red-700 text-lg"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}


            <div className="flex justify-between items-center mt-6">
              <h2 className="text-2xl font-semibold text-gray-800">Total:</h2>
              <p className="text-2xl text-gray-800">${calculateTotal()}</p>
            </div>


            <div className="mt-6">
              
              <button
                className="w-full py-3 bg-green-500 text-white text-lg font-semibold rounded-md hover:bg-green-700 transition duration-300"
                onClick={handleProceedToCheckout} // Call the navigation function
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default Cart;