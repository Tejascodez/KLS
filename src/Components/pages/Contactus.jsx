    import React from 'react';
    import './Contact.css'; // CSS file for styling

    const ContactUs = () => {
      return (
        <div className="contact-us-container">
          <h2 className="contact-us-title">Contact Us</h2>
          
          <div className="contact-info-grid">
            <div className="contact-info">
              <span>Mahesh Jadhav</span>
              <a href="tel:+919867569737">+91 98675 69737</a>
              <a href="mailto:info@kinglogistics.in">info@kinglogistics.in</a>
            </div>
            
            <div className="contact-info">
              <span>Nandkumar Jadhav</span>
              <a href="tel:+91808383080">+91 80838 3080</a>
              <a href="mailto:kinglogistics2023@gmail.com">kinglogistics2023@gmail.com</a>
            </div>
          </div>
          
          <p>
            <b>A-304, Vision Residency, Wing A, Plot No. 61, Sector 17, Kalamboli,<br />
            Navi Mumbai, Maharashtra - 410218.</b> 
          </p>
          
          {/* Footer Section */}
          <footer className="contact-footer">
            © 2025 King Logistics and Solutions - All Rights Reserved
          </footer>
        </div>
      );
    };

    export default ContactUs;
