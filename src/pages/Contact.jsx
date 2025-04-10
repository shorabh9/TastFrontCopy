import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-10 bg-gradient-to-b from-orange-100 to-orange-300">
      <h1 className="mb-6 text-4xl font-bold text-orange-800">Contact Us</h1>
      <p className="max-w-2xl mb-8 text-lg text-center text-gray-700">
        Have questions or feedback? We'd love to hear from you! Reach out to us using the form below or connect with us through our contact details.
      </p>
      
      <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-2xl">
        <form className="flex flex-col space-y-4">
          <label className="text-lg text-gray-700">Name</label>
          <input 
            type="text" 
            placeholder="Enter your name" 
            className="p-3 border border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          
          <label className="text-lg text-gray-700">Email</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="p-3 border border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          
          <label className="text-lg text-gray-700">Message</label>
          <textarea 
            placeholder="Write your message here..." 
            className="h-32 p-3 border border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
          
          <button className="p-3 font-semibold text-white transition-all bg-orange-500 rounded-lg hover:bg-orange-600">
            Send Message
          </button>
        </form>
      </div>
      
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-orange-800">Contact Information</h2>
        <p className="text-lg text-gray-700">📍 Address: 123 Tasty Nest, Rajasthan, India</p>
        <p className="text-lg text-gray-700">📞 Phone: +91 98765 43210</p>
        <p className="text-lg text-gray-700">✉️ Email: support@tastynest.com</p>
      </div>
    </div>
  );
};

export default Contact;
