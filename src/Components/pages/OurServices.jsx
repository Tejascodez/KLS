import React from "react";
import "./OurServices.css"; // CSS file for styling
import Navbar from "../Navbar";
import ContactUs from "./Contactus";
import { FaShippingFast, FaTruck, FaBoxes } from "react-icons/fa"; // Importing FontAwesome icons

const OurServices = () => {
  return (
    <>
      <Navbar />
      <div className="services-container">
        <h1 className="services-title">Our Services</h1>

        <div className="service-card">
          <div className="service-icon-container">
            <FaShippingFast className="service-icon" />
          </div>
          <div className="service-info">
            <h2><b>Ocean Freight</b></h2>
            <p>
              Be it a Part container load or Full container load, <b>King Logistics & Solutions</b> has expertise
              to provide you better freight rates and services. Our volumes speak about
              our customer satisfaction.
            </p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon-container">
            <FaTruck className="service-icon" />
          </div>
          <div className="service-info">
            <h2><b>Transport</b></h2>
            <p>
              <i>"Time is Money"</i> – The principle we work by. To avoid hunting for transporters,
              we have opened up this division to provide vehicles that move containers to the gateway
              ports in time, ensuring connection to the vessel or delivery to the consignee's doorstep.
            </p>
            <p>
              We make this happen with our fleet of 20' & 40' trailers, which are dedicated to moving
              your consignments efficiently.
            </p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon-container">
            <FaBoxes className="service-icon" />
          </div>
          <div className="service-info">
            <h2><b>Customs House Brokers</b></h2>
            <p>
              <b>Operations Department:</b> Our management has carefully picked staff who are best in
              the industry and well-versed in the latest government policies and notifications.
            </p>
            <p>
              Our ability to understand and respect customers' needs and requirements has earned us
              commendations from competent authorities for handling large volumes. We are committed
              to providing the best services and staying updated to meet our clients' needs.
            </p>
          </div>
        </div>
      </div>
      <ContactUs/>
    </>
  );
};

export default OurServices;
