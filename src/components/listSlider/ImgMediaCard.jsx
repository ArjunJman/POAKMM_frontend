import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import "./matchList.css";

// getting the event card by getting the event details as a props
export default function ImgMediaCard(match) {
  return ( 
    <div
      className="match-card"
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#000000",
      }}
    >
      {/* specifying the card containing the event details */}
      <Card
        sx={{
          backgroundColor: "#000",
          color: "white",
        }}
      >
        
        {/* card image contains the details of the events   */}
       
        <CardMedia
          component="img"
          alt="green iguana"
          height="100px"
          image={match.data.img_url}
          style={{
            height: "200px",
            justifyContent: "center",
            backgroundColor: "#000000",
          }}

        />
        <div className="card-title">{match.data.name}</div>
        <p className="venue">{match.data.date}</p>

      </Card>
    </div>
  );
}
