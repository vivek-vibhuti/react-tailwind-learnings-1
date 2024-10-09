import { useState } from 'react';
import './App.css';

import Vivek from './vivek.jsx'; // Ensure Vivek is correctly imported
import { Navbar } from './navbar.jsx'; // Adjust the path if needed
import Footer from './Footer.jsx';

function App() {
  return (
    <>


    <div className="w-full p-0">
      <Navbar />
      <Vivek />
      <Footer />
    </div>
  

    </>
  );
}

export default App;
