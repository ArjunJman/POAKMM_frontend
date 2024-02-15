import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./User.css";

function User() {
  const [userData, setuserData] = useState();
  //send the data to backend
  var requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("myToken")}`,
    },
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/UserDetail", requestOptions) //enter allTickets post end point.
      .then((response) => response.json())
      .then((result) => {
        console.log("response", result);
        setuserData(result);
      });
  }, []);

  console.log("whyy", userData);
  return (
    // looping all the user tickets to generate tickets booked
    /* Ticket container will contain all the tickets booked by the logged in user. */
    <div className="Ticket-container">
      {userData.map((user, index) => (
        <div className="ticket" key={index}></div>
      ))}
    </div>
  );
}

export default User;
