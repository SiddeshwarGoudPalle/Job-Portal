import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">JobPortal</a>
        <div className="space-x-4">
          <a href="/" className="hover:text-blue-300">Home</a>
          <a href="/jobs" className="hover:text-blue-300">Jobs</a>
          <a href="/login" className="hover:text-blue-300">Login</a>
          <a href="/register" className="hover:text-blue-300">Register</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;