import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomerReviews.css";
import img1 from "../../images/user.png";
import Reviews from "./Reviews";
import jsonData from "../data/testemonials.json";

// getting the reviews of customer which is saved in json file
function CustomerReviews() {
  return (
    <div className="customer">
      <h1 class="heading"> Our customers reviews</h1>
      <div className="review-container">
        {/* going through json file to get the data */}

        {/* just tried another method as we are already getting data fom backend server for other components */}
        {jsonData.map((item, index) => (
          <Reviews
            key={index}
            author={item.author}
            title={item.title}
            content={item.content}
            imgSrc={item.imgSrc}
          />
        ))}
      </div>

      {/* Ticket container will contain all the tickets booked by the logged in user. */}
      <div className="ticket-container">
        <div className="ticket-card">
          <h1>AUS Vs IND</h1>
          <div className="second-row">
            <h5>Venue: venue</h5>
            <h5>Date: 15/01/2024</h5>
          </div>

          <h5 className="second-row">Seats no.</h5>
          <h5 className="second-row">Booking Date: 15/01/2024</h5>
        </div>
        <div className="ticket-card">
          <h1>AUS Vs IND</h1>
          <div className="second-row">
            <h5>Venue: venue</h5>
            <h5>Date: 15/01/2024</h5>
          </div>

          <h5 className="second-row">Seats no.</h5>
          <h5 className="second-row">Booking Date: 15/01/2024</h5>
        </div>
      </div>
    </div>
  );
}

export default CustomerReviews;
