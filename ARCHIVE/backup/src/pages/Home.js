import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-between p-8 relative">
      {/* Name at the top */}
      <div className="mt-8">
        <h1 className="text-5xl font-light text-center m-0 tracking-wider">Liz Dorman</h1>
      </div>

      {/* Image in the middle */}
      <div className="flex-1 flex items-center justify-center my-8">
        <img 
          src="/liz_humane_pic.jpeg" 
          alt="Liz Dorman" 
          className="w-72 h-72 rounded-full object-cover border-2 border-white"
        />
      </div>

      {/* Current status text */}
      <div className="text-center my-8 max-w-lg">
        <p className="text-lg leading-relaxed text-gray-300 m-0">
          Currently working at Humane, exploring the future of human-computer interaction in San Francisco.
        </p>
      </div>

      {/* Button to timeline */}
      <div className="my-8">
        <Link 
          to="/what-ive-done" 
          className="inline-block px-8 py-4 bg-transparent text-white border-2 border-white rounded font-medium transition-all duration-300 uppercase tracking-wide hover:bg-white hover:text-black"
        >
          What I've Done
        </Link>
      </div>

      {/* Social icons at bottom */}
      <div className="flex gap-8 mb-8 opacity-60">
        <a href="#" className="text-white no-underline text-sm uppercase tracking-wide transition-opacity duration-300 hover:opacity-100">Twitter</a>
        <a href="#" className="text-white no-underline text-sm uppercase tracking-wide transition-opacity duration-300 hover:opacity-100">Instagram</a>
        <a href="#" className="text-white no-underline text-sm uppercase tracking-wide transition-opacity duration-300 hover:opacity-100">LinkedIn</a>
        <a href="mailto:liz.g.dorman@gmail.com" className="text-white no-underline text-sm uppercase tracking-wide transition-opacity duration-300 hover:opacity-100">Email</a>
      </div>
    </div>
  );
};

export default Home; 