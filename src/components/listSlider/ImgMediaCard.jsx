import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './matchList.css'
 
export default function ImgMediaCard(match) {
  return (
    <div className='match-card' style={{ display: 'flex', justifyContent:'center', backgroundColor: '#000000' }}>
      <Card sx={{
        
        backgroundColor: '#424242', // Dark background color
        color: 'white', // White text color
      }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140px"
          image={match.data.img_url}
        />
               <div className='card-title'>{match.data.name}</div>
               <p className='venue'>{match.data.date}</p>
               {/* <p className='location'>{match.data.location}</p> */}
   
       
      </Card>
   
    </div>
  );
}