import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carausel.css'
import image1 from '../../images/slide-04.jpg'
import image2 from '../../images/slide-05.jpg'
import image3 from '../../images/slide-06.jpg'
function Carausel() {
  
        return (
            <Carousel id='slider'>
                <div>
                    <img src={image1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    
};

export default Carausel;