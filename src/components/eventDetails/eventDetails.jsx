import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./eventDetails.css";
import Ticket from "../BookTickets/Ticket";

function EventDetails() {
  const [event, setEvent] = useState(null);
  const { id } = useParams();
  let name, cat, date, loc, Venue;


  useEffect(() => {
    console.log('In events token', sessionStorage.getItem('myToken'))
    const fetchMatches = async () => {
      try {
        var requestOptions = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('myToken')}`
          },
        };
        const response = await fetch(`http://localhost:3000/api/fetchMatch/${id}`, requestOptions);
        if (!response.ok) {
          throw new Error('Failed to fetch matches');
        }
        const foundEvent = await response.json();
        // console.log("frrrrrr",foundEvent)
        if (foundEvent) {
          // const obj=foundEvent[0]
          setEvent(foundEvent[0]);
        } else {
          console.error(`Event with id ${id} not found`);
        }
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

    fetchMatches();
    

   


  }, []);
  console.log('event', event)

  return (
    <div className="eventDetails">
      <img src={"https://th.bing.com/th/id/R.ee280562fdf3a23a8de44003edcafd2e?rik=CZOjszo%2ffZKxmg&riu=http%3a%2f%2fwww.highreshdwallpapers.com%2fwp-content%2fuploads%2f2014%2f01%2fAthletic-Running-HD-Image.jpg&ehk=wRAGQ3TOW480q6hs8x7u8whibiJ%2bduPVlAKfqjhC%2blA%3d&risl=&pid=ImgRaw&r=0"} className="back-img" />
      <div className="content row">
        <div className="event-details col-lg-8">
          {event && (
            <>
              <img src={event.img_url} />
              <div className="content-part">

                <h2>{event.name}</h2>
                <p className="content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dictum ultrices eros ac iaculis. Vivamus malesuada odio sed est mollis, nec bibendum ex pretium. Quisque eleifend malesuada orci sed sagittis. Fusce ac odio vitae leo porttitor blandit. Vivamus condimentum elit vitae lobortis porta. Donec facilisis convallis ipsum sed vehicula. Phasellus ultricies, orci aliquam lobortis aliquet, felis velit sollicitudin ipsum, vitae malesuada arcu nulla eu libero. Curabitur efficitur pharetra pellentesque. Morbi ac massa nisl. Aenean dictum mauris in vestibulum tristique</p>

                <p className="content-description">{event.content}</p>
                <div className="content-description">
                  <p>Category: {event.category}</p>
                  <p>Venue: {event.venue}, {event.location}</p>
                  <p>Date: {event.date}</p>
                  <p>Total Seats Available: {Object.values(event.seats).filter(value => value === true).length} out of {Object.keys(event.seats).length}</p>
                  <div className="hidden">{ cat = event.category}
                  {name=event.name}
    {date = event.date}
    {loc = event.location}
    {Venue = event.venue}</div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="side-content col-lg-4">
          <Ticket id={id} name={name} cat={cat} loc={loc} venue={Venue} date={date} />
        </div>
      </div>
    </div>
  );
}

export default EventDetails;