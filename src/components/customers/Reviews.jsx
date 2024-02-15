import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomerReviews.css";

function Reviews({ author, title, content, imgSrc }) {
  // just made a component which will be called again and again untill the json file is finished and using props to assign elements
  return (
    <div class="box">
      <img src={imgSrc} alt={author} />
      <h3>{author}</h3>
      <p>{content}</p>
    </div>
  );
}

export default Reviews;
