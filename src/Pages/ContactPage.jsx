
import React, { useState } from 'react';


function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();


    // Simple validation
    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }


    // Reset error and show success message
    setError('');
    setSuccessMessage('Your message has been sent successfully!');


    // Optionally, reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };


  return (
    <div className="bg-green-100 min-h-screen flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h1>


        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>


          <div>
            <label className="block text-lg text-gray-700 mb-2">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>


          <div>
            <label className="block text-lg text-gray-700 mb-2">Your Message</label>
            <textarea
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="5"
            />
          </div>


          {error && <p className="text-red-500 text-center">{error}</p>}
          {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}


          <button
            type="submit"
            className="bg-green-500 text-white text-lg sm:text-base px-6 py-3 rounded-md w-full hover:bg-green-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}


export default ContactPage;