import React from 'react';
import Navbar from './Navbar';
import BootstrapCarousel from './BootstrapCarousel';
import Services from './Services';
import AboutUs from './pages/AboutUs';
import carousel from '../assets/carousel.png';
import car2 from '../assets/aboutus1.png';
import './pages/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const items = [
        {
            src: carousel,
            alt: 'King Logistics & Solutions',
            captionTitle: 'Welcome to King Logistics & Solutions',
            captionText: 'Your trusted partner for Customs Brokering, International Freight Forwarding, and Transport Solutions.',
        },
        {
            src: 'https://cdn.pixabay.com/photo/2021/09/30/17/54/port-6670684_1280.jpg',
            alt: 'Second slide',
            captionTitle: 'Efficient Logistics for Every Need',
            captionText: 'Our services cover Sea Freight, Road Transport, Warehousing, and much more.',
        },
        {
            src: car2,
            alt: 'Third slide',
            captionTitle: 'Reliable Services for Global Shipping',
            captionText: 'Trust us for seamless international shipping and cargo management.',
        }
    ];

    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Carousel Section */}
            <div className="carousel" style={{ marginTop: '0px' }}>
                <BootstrapCarousel items={items} autoplay={true} autoplaySpeed={3000} />
            </div>

            {/* Sections */}
            <div id="services" style={{ marginTop: '50px' }}>
                <Services />
            </div>

            <div id="about-us" style={{ marginTop: '50px' }}>
                <AboutUs />
            </div>
        </div>
    );
};

export default Home;
