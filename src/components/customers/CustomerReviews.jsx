import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomerReviews.css";
import Reviews from "./Reviews";
import jsonData from "../data/testemonials.json";

// getting the reviews of customer which is saved in json file

function CustomerReviews() {
  return (
    <div className="customer">
      <h1 class="heading"> Our customers reviews</h1>
      <div className="review-container">
        {/* going through json file to get the data */}
        {/* just tried another method as we are already getting data fom backend server for other components */}
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
  );
}

export default CustomerReviews;
