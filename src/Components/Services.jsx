import React from 'react';
import './Services.css'; // Add CSS file for styling
import AboutUs from './pages/AboutUs';


const transportServices = [
  {
    title: 'Sea Freight',
    description: 'Cost-effective sea freight solutions for large and bulk shipments.',
    icon: '🚢',
  },
  {
    title: 'Road Transport',
    description: 'Efficient road transport services for local and regional deliveries.',
    icon: '🚛',
  },
 
  {
    title: 'Customs Clearance',
    description: 'Comprehensive customs clearance services to handle all import/export documentation.',
    icon: '📑',
  },
  {
    title: 'Warehousing',
    description: 'Storage solutions for import/export goods with easy access and tracking.',
    icon: '🏢',
  },
  {
    title: 'Packaging Services',
    description: 'Secure packaging for your goods to ensure safe transit.',
    icon: '📦',
  },
  {
    title: 'Cargo Insurance',
    description: 'Protection for your goods during transportation against any loss or damage.',
    icon: '🛡️',
  },
  {
    title: 'Door-to-Door Delivery',
    description: 'Full-service delivery from your door to the destination address.',
    icon: '🏠',
  },
  {
    title: 'Consultancy',
    description: 'Expert advice on optimizing your logistics and supply chain for international trade.',
    icon: '💼',
  },
];

const TransportServiceCard = ({ title, description, icon }) => (
  <div className="transport-service-card">
    <div className="service-icon">{icon}</div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
  </div>
);

const TransportServices = () => {
  return (
    <div className="transport-services-container">
       <section className="about-header">
       <h2>ABOUT US</h2>
    
        <h1>Welcome to King Logistics & Solutions</h1>
        <p>
          <b>Your trusted partner for Customs Brokering, International Freight Forwarding, and Transport Solutions.</b>
        </p>

        <p className="about-text">
       <b> King Logistics & Solutions </b> was founded in Mumbai as a Customs House Broker, and service provider to Exporters and Importers dealing with Customs issues.
Upon receiving Positive feedback and support from Exporters and Importers, we have given a thought of opening our doors for handling International Freight Forwarding by  Sea. Thus Extending our freight forwarding services to our clientele to use our expertise in handling their Exports and Imports. 
Today we provide various services, under one roof such as Customs Brokering, Transportation, International Freight Forwarding by Sea, Warehousing and Project Handling.
        </p>



      </section>


      <h2 className="services-title"> Our Services</h2>
      <div className="info">
        <p>
        At King Logistics and Solutions, we specialize in offering comprehensive logistics services, including Sea Freight, Road Transport, Customs Clearance, Warehousing, Packaging, Cargo Insurance, Door-to-Door Delivery, and Consultancy. With a strong presence in key ports like Kandla and Mundra, we cater to a 200 km radius with our diversified fleet of 250 trucks. Our experienced team ensures efficient and secure handling of shipments, from factory premises to sea ports, while offering tailored solutions for every client. Whether it’s optimizing your supply chain or providing expert logistics advice, King Logistics is committed to delivering seamless, cost-effective solutions for your business needs.
        </p>
        </div>
        <div className="services-grid">
  {transportServices.slice(0, 6).map((service, index) => (
    <TransportServiceCard
      key={index}
      title={service.title}
      description={service.description}
      icon={service.icon}
    />
  ))}
</div>

    </div>
  );
};

export default TransportServices;
