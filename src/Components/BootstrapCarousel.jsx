import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const BootstrapCarousel = ({ items, autoplay = false, autoplaySpeed = 3000 }) => {
  return (
    <Carousel
      interval={autoplay ? autoplaySpeed : null}
      controls={true}
      indicators={true}
      fade={true}
    >
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 img-fluid"
            src={item.src}
            alt={item.alt}
            style={{ height: '600px', objectFit: 'cover' }} // Adjusted height
          />
          <Carousel.Caption>
            <h3>{item.captionTitle}</h3>
            <p>{item.captionText}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BootstrapCarousel;
