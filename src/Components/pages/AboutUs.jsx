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
        King Logistics & Solutions was founded with the mission to revolutionize the logistics industry by simplifying processes and offering top-tier freight services that businesses can rely on. Over the years, we have become a trusted partner in the logistics and transportation sector, known for our unwavering commitment to reliability, efficiency, and customer satisfaction.

Our core expertise lies in Customs Brokering and International Freight Forwarding, offering tailored solutions for both air and sea shipments. Whether it’s moving goods across oceans or facilitating fast air transport, we ensure that every step of the supply chain is handled with precision and care. We cater to a wide range of industries, providing logistical support for both large enterprises and small businesses alike, ensuring that all shipping needs are met—on time and within budget.

Our strategically located office at A-304, Vision Residency, Sector 17, Kalamboli, Navi Mumbai, positions us at the heart of a vital logistics hub, allowing us to offer seamless services to both local and international clients. This prime location enables us to connect efficiently with key transportation routes and ports, facilitating smooth operations for the timely movement of goods.

At King Logistics & Solutions, we are not just a logistics company—we are a partner dedicated to optimizing your supply chain. With a focus on personalized service, cutting-edge technology, and a team of experts, we ensure that every shipment, whether by sea or air, reaches its destination safely and on schedule.
          Our office, located at A-304, Vision Residency, Sector 17, Kalamboli, Navi Mumbai, ensures we are well-positioned to serve clients locally and internationally. 
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

      {/* Contact Section */}
      <footer className="about-contact">

  <div className="contact-info">
    <a href="tel:+919867569737">+91 98675 69737</a> 
    <span>Mahesh Jadhav</span>
  </div>
  <div className="contact-info">
    <a href="tel:+91808383080">+91 80838 3080</a> 
    <span>Mahesh Jadhav</span>
  </div>
  <p>
    <a href="mailto:info@kinglogistics.in">info@kinglogistics.in</a>
  </p>
  <p>
    A-304, Vision Residency, Wing A, Plot No. 61, Sector 17, Kalamboli, Navi Mumbai, Maharashtra - 410218.
  </p>
</footer>
    </div>
  );
};

export default AboutUs;
