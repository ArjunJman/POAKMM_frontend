import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carausel.css'
import image1 from '../../images/slide-01.jpg'
import image2 from '../../images/slide-02.jpg'
import image3 from '../../images/slide-03.jpg'
function Carausel() {
  
        return (
            <Carousel>
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