import React, { useState, useContext, useEffect } from 'react';
import Seat from './Seat';

const Seats =({ticketDetails,id}) => {

  const [seat, setSeat] = useState({});
  console.log("ss",id)
  useEffect(()=>{
    var requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${sessionStorage.getItem('myToken')}`
      },
    };
    fetch(`http://localhost:3000/api/fetchMatch/${id}`,requestOptions)
      .then(res=>res.json())
      .then(result=>
        {
              console.log("dfsdfsdf",result[0])
              setSeat(result[0].seats)
        if (result.ok) {
          throw new Error('Failed to fetch matches');
        }
        // const foundEvent = data.find(match => match.match_id === id);
        })
   .catch(error=>{
    console.error('Error fetching matches:', error);
  })},[])

  
  return (
    <>
      <div>
        <h3 className='font-mono font-semibold' >Select your seats!!!</h3>
        <hr />
        <div className='grid grid-cols-3 gap-4 w-[20rem] m-5 pl-5'>
        {Object.entries(seat).map((val,id)=><Seat val={val} ticketDetails={ticketDetails}/>)
        }
        </div>
      </div>
    </>
  );
};

export default Seats;
