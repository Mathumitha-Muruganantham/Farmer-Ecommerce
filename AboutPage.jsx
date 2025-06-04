import React from 'react';
import Footer from './Footer';
import Header from './Header'; // Make sure this import matches the correct file


function AboutPage() {
  return (
    <div className="bg-green-100 min-h-screen">
      <Header />


      <section className="px-8 py-10 max-w-8xl mx-auto text-green-900">
        <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>


        <img
          src="https://static.sadhguru.org/d/46272/1633189728-1633189727349.jpg"
          alt="About"
          className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
        />


        <p className="text-lg leading-relaxed">
          Welcome to our agricultural platform. We are committed to connecting farmers and consumers directly, promoting organic farming,
          and supporting sustainable agriculture. Our platform offers fresh produce, essential fertilizers, and a transparent supply chain to
          ensure the best quality reaches every home. Thank you for being a part of our journey.
        </p>
        <h1 className="text-xl font-bold mb-6 text-left mb-6 mt-6">Our Mission</h1>
        <p className="text-lg leading-relaxed">
          Welcome to our agricultural platform. We are committed to connecting farmers and consumers directly, promoting organic farming,
          and supporting sustainable agriculture. Our platform offers fresh produce, essential fertilizers, and a transparent supply chain to
          ensure the best quality reaches every home. Thank you for being a part of our journey.
        </p>
        <h1 className="text-xl font-bold mb-6 text-left mb-6 mt-6">Our Vision</h1>
        <p className="text-lg leading-relaxed">
          Welcome to our agricultural platform. We are committed to connecting farmers and consumers directly, promoting organic farming,
          and supporting sustainable agriculture. Our platform offers fresh produce, essential fertilizers, and a transparent supply chain to
          ensure the best quality reaches every home. Thank you for being a part of our journey.
        </p>
      </section>


      <Footer />
    </div>
  );
}


export default AboutPage;












