import React from 'react';

const Hero = () => {
  return (
    <div className="bg-blue-50 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
        <p className="mb-8">Search for jobs that match your skills and interests.</p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Job Title"
            className="p-2 border border-gray-300 rounded-l-lg"
          />
          <input
            type="text"
            placeholder="Location"
            className="p-2 border border-gray-300"
          />
          <button className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;