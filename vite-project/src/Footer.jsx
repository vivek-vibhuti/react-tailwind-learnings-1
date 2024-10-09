import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center p-4 mt-4 w-full">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-400">Terms of Service</a>
                    <a href="#" className="hover:text-gray-400">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
