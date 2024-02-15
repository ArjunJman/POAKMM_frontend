import * as React from 'react';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';

import './matchList.css'
 
export default function ImgMediaCard(match) {
  return (
    <div className='match-card' style={{ display: 'flex', justifyContent:'center', backgroundColor: '#000000' }}>
      <Card sx={{
        
        backgroundColor: '#000', // Dark background color
        color: 'white', // White text color
      }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="100px"
          image={match.data.img_url}
          style={{ height: '200px', justifyContent:'center', backgroundColor: '#000000' }}
        />
               <div className='card-title'>{match.data.name}</div>
               <p className='venue'>{match.data.date}</p>
               {/* <p className='location'>{match.data.location}</p> */}
   
       
      </Card>
   
    </div>
  );
}