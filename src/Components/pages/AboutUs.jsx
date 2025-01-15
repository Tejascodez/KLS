import React from "react";
import us from '../../assets/aboutus.png'
import Navbar from "../Navbar";
import "./AboutUs.css"; 


const AboutUs = () => {
  return (

    <>
   < Navbar/>
    

    <div className="about-us-container">
      <div className="caro">
        <img src={us} alt="" />
      </div>
   
      <section className="about-content">
      <h2>ABOUT US</h2>

      
        <p className="about-text">
          Established with the mission to simplify logistics and provide top-notch freight services, King Logistics & Solutions has become a name synonymous with reliability and efficiency. With a focus on Customs Brokering and International Freight Forwarding by Air and Sea, we cater to diverse logistical needs across the globe.
        </p>
        <p className="about-text">
       <b> King Logistics & Solutions </b> was founded in Mumbai as a Customs House Broker, and service provider to Exporters and Importers dealing with Customs issues.
Upon receiving Positive feedback and support from Exporters and Importers, we have given a thought of opening our doors for handling International Freight Forwarding by  Sea. Thus Extending our freight forwarding services to our clientele to use our expertise in handling their Exports and Imports. 
Today we provide various services, under one roof such as Customs Brokering, Transportation, International Freight Forwarding by Sea, Warehousing and Project Handling.
        </p>
      </section>
   

      {/* Services Section */}
      <section className="about-services">

        <ul>
          <li>Customs House Brokering</li>
          <li>International Freight Forwarding (Air & Sea)</li>
          <li>Transportation Solutions</li>
          <li>Warehousing & Storage</li>
          <li>Supply Chain Management</li>
        </ul>
      </section>

      <footer className="contact-footer">
            © 2025 King Logistics and Solutions - All Rights Reserved
          </footer>
 
    </div>
    </>
  );
};

export default AboutUs;
