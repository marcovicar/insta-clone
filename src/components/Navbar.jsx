import React from "react";

const Navbar = () => {
  return (
    <>
    <header>
        <nav className="bg-blue-500 p-4 text-white fixed top-0 left-0 w-full bg-blue-500 p-4 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">My Navbar</h1>
            <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-200">Home</a></li>
            <li><a href="#" className="hover:text-gray-200">About</a></li>
            <li><a href="#" className="hover:text-gray-200">Contact</a></li>
            </ul>
        </div>
        </nav>
    </header>
    </>
  );
};

export default Navbar;
