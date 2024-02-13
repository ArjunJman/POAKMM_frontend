import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomerReviews.css'
import img1 from '../../images/profile-img.jfif'



function Reviews({ author, title, content, imgSrc }) {
  


  return (       
        <div class="box">
            <img src={imgSrc} alt={author} />
            <h3>{author}</h3>
            <p>{content}</p>
        </div>
  )
}

export default Reviews;
