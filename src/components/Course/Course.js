import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Course.css";
import Rating from "react-rating";

const Course = (props) => {
  // console.log(props);
  const { name, img, instructor, price, star } = props.course;

  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <p>
          <small>by: {instructor}</small>
        </p>
        <p>Price: {price}</p>
        <p>{/* <small>only {stock} left in stock - order soon</small> */}</p>
        <Rating
          initialRating={star}
          emptySymbol="far fa-star icon-color"
          fullSymbol="fas fa-star icon-color"
          readonly
        ></Rating>
        <br />
        <button
          onClick={() => props.handleAddToCart(props.course)}
          className="btn-regular"
        >
          <FontAwesomeIcon icon={faShoppingCart} /> add to cart
        </button>
      </div>
    </div>
  );
};

export default Course;
