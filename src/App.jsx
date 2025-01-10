import React from 'react';
import Navbar from './Components/Navbar'; // Assuming Navbar is in a Components folder
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BootstrapCarousel from './Components/BootstrapCarousel'; // Adjust import based on your actual path
import carousel2 from './assets/car2.png'; // Image paths
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Services from './Components/Services';
import AboutUs from './Components/pages/AboutUs';
import ContactUs from './Components/pages/Contactus';
import Home from './Components/Home';

function App() {


  return (
    <>

<Home/>

{/* <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
</BrowserRouter> */}

    </>
  );
}

export default App;
