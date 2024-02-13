import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./eventDetails.css";
import img1 from "../../images/slide-01.jpg";
import img2 from "../../images/slide-02.jpg";
 
function EventDetails() {
  const [event, setEvent] = useState(null);
  const { id } = useParams();
 
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/getEvent');
        if (!response.ok) {
          throw new Error('Failed to fetch matches');
        }
        const data = await response.json();
        const foundEvent = data.find(match => match.match_id === id);
        if (foundEvent) {
          setEvent(foundEvent);
        } else {
          console.error(`Event with id ${id} not found`);
        }
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };
 
    fetchMatches();
  }, [id]);
 
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
              </div>
            </div>
            </>
          )}
        </div>
        <div className="side-content col-lg-4"></div>
      </div>
    </div>
  );
}
 
export default EventDetails;