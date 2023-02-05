import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
function Star({ reviews, rating }) {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {rating > index + 1 ? (
          <FaStar />
        ) : rating > number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });
  return (
    <div>
      <div>
        <p>{ratingStar}</p>
        <p>{reviews} customer reviews</p>
      </div>
    </div>
  );
}

export default Star;
