import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./carausel.css";
import image1 from "../../images/slide-04.jpg";
import image2 from "../../images/slide-02.jpg";
import image3 from "../../images/slide-06.jpg";

// react-responsive carousel componet to get image slider
function Carausel() {
  return (
    <Carousel id="slider" showThumbs={false}>
      <div>
        <img src={image1} />
      </div>
      <div>
        <img src={image2} />
      </div>
      <div>
        <img src={image3} />
      </div>
    </Carousel>
  );
}

export default Carausel;
