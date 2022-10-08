// import axios from "axios";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

function Rating() {
  const [rating, setRating] = useState(null);
  const [onHover, setOnHover] = useState(null);

  return (
    <>
      <div>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => {
                  setRating(ratingValue);
                }}
              />
              <FaStar
                className="stars"
                color={
                  (rating || onHover) >= ratingValue ? "#ffc107" : "#e4e5e9"
                }
                size={25}
                onMouseEnter={() => setOnHover(ratingValue)}
                onMouseLeave={() => setOnHover(ratingValue)}
                onMouseOver={() => setRating(0)}
              ></FaStar>
            </label>
          );
        })}
      </div>
    </>
  );
}

export default Rating;
