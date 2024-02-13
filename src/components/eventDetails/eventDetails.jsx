import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./eventDetails.css";
import img1 from "../../images/slide-01.jpg";
import img2 from "../../images/slide-02.jpg";
function EventDetails() {
  //   const [count, setCount] = useState(0);s

  return (
    <div className="eventDetails">
      <img src={img1} className="back-img" />
      <div className="content row">
        <div className="event-details col-lg-8">
          <img src={img2} />
          <div className="content-part">
            <h2>Taylor Swift: The Eras Tour</h2>
            <p className="content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dictum ultrices eros ac iaculis. Vivamus malesuada odio sed est mollis, nec bibendum ex pretium. Quisque eleifend malesuada orci sed sagittis. Fusce ac odio vitae leo porttitor blandit. Vivamus condimentum elit vitae lobortis porta. Donec facilisis convallis ipsum sed vehicula. Phasellus ultricies, orci aliquam lobortis aliquet, felis velit sollicitudin ipsum, vitae malesuada arcu nulla eu libero. Curabitur efficitur pharetra pellentesque. Morbi ac massa nisl. Aenean dictum mauris in vestibulum tristique</p>
<div className="content-description">
<p >Venue: </p>
            <p >Date: </p>
</div>
            
          </div>
        </div>
        <div className="side-content col-lg-4"></div>
      </div>
    </div>
  );
}

export default EventDetails;
