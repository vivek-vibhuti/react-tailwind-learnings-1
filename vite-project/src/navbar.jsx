import React from 'react';

export const Navbar = () => {
    return (
        <div className=''>
            <div className='bg-red-500  flex justify-evenly rounded-full hover:shadow-xl shadow-black p-4'>
                <a href="#" className="text-white hover:text-gray-400 transition duration-300">Home</a>
                <a href="#" className="text-white hover:text-gray-400 transition duration-300">Features</a>
                <a href="#" className="text-white hover:text-gray-400 transition duration-300">Pricing</a>
                <a href="#" className="text-white hover:text-gray-400 transition duration-300">About</a>
                <a href="#" className="text-white hover:text-gray-400 transition duration-300">Contact</a>
                <a href="#" className="text-white hover:text-gray-400 transition duration-300">Blog</a>
                <a href="#" className="text-white hover:text-gray-400 transition duration-300">Help</a>
            </div>
            <div className="text-center mt-4">
                <h1 className='text-3xl font-bold hover:animate-bounce text-blue-500'>Welcome</h1>
            </div>
        </div>
    );
}
