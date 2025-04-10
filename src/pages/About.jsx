import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-10 bg-gradient-to-b from-orange-100 to-orange-300">
      <h1 className="mb-6 text-4xl font-bold text-orange-800">About Our Food App</h1>
      <p className="max-w-2xl mb-8 text-lg text-center text-gray-700">
        Welcome to our food app! We are dedicated to bringing you the best culinary experiences, with a variety of delicious meals delivered right to your doorstep. Our mission is to make food ordering simple, enjoyable, and hassle-free.
      </p>
      
      <div className="flex flex-col items-center max-w-4xl p-6 bg-white shadow-lg rounded-2xl md:flex-row">
        <img
          src="src/assets/Toni.jpg"
          alt="Founder Shorabh Singh"
          className="object-cover w-48 h-48 mb-4 border-4 border-orange-500 rounded-full shadow-md md:mb-0 md:mr-6"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-orange-800">Shorabh Singh</h2>
          <p className="text-lg text-gray-600">Founder & Developer</p>
          <p className="mt-2 text-gray-700">
            Passionate about technology and food, Shorabh Singh created this app to connect people with amazing culinary experiences. His vision is to revolutionize food delivery with seamless service and high-quality meals.
          </p>
        </div>
      </div>

      <div className="max-w-4xl p-6 mt-10 bg-white shadow-lg rounded-2xl">
        <h2 className="mb-4 text-3xl font-bold text-center text-orange-800">Our Story</h2>
        <p className="text-lg text-center text-gray-700">
          Our journey began with a simple idea: to make food delivery easy and accessible for everyone. We started with a small team of food lovers and developers who wanted to create a seamless ordering experience. Today, our app serves thousands of users, helping them discover new flavors and enjoy their favorite meals with ease.
        </p>
      </div>

      <div className="max-w-4xl p-6 mt-10 bg-white shadow-lg rounded-2xl">
        <h2 className="mb-4 text-3xl font-bold text-center text-orange-800">Why Choose Us?</h2>
        <ul className="px-6 space-y-2 text-lg text-left text-gray-700 list-disc">
          <li>Wide variety of cuisines from top restaurants.</li>
          <li>Fast and reliable food delivery service.</li>
          <li>Easy-to-use interface for a smooth ordering experience.</li>
          <li>Exclusive discounts and offers for our users.</li>
          <li>Commitment to quality and customer satisfaction.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
