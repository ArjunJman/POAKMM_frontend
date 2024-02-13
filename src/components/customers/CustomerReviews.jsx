import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomerReviews.css'
import img1 from '../../images/profile-img.jfif'
import Reviews from './Reviews';
import jsonData from '../data/testemonials.json';

function CustomerReviews() {
  const [count, setCount] = useState(0)


  return (
  
      <div className='customer'>
        
        <h1 class="heading"> Our customers reviews</h1>
        <div className="review-container">
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
       
  
     </div>

  )
}

export default CustomerReviews;
