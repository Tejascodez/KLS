import React from "react";
import "./AboutUs.css"; 
import logo from '../../assets/image.png'; // External CSS file for styling
import call from '../../assets/call.png';
import contact from '../../assets/contact.png';
import email from '../../assets/email.png';
import profile from '../../assets/profile.png';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Header Section */}
     

      {/* Company Overview */}
      <section className="about-content">
        <h2>About Us</h2>
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

   
 
    </div>
  );
};

export default AboutUs;
