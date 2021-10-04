import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  let totalQuantity = 0;
  let total = 0;
  for (const course of cart) {
    if (!course.quantity) {
      course.quantity = 1;
    }
    total = total + course.price * course.quantity;
    totalQuantity = totalQuantity + course.quantity;
  }

  // const shipping = total > 0 ? 15 : 0;
  // const tax = (total + shipping) * 0.10;
  // const grandTotal = total + shipping + tax;
  return (
    <div>
      <h3>Order Summary</h3>
      <h5>Items Ordered: {totalQuantity}</h5>
      <br />
      <p>Total: {total.toFixed(2)}</p>
      {/* <p>Shipping: {shipping}</p>
            <p>tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p> */}
    </div>
  );
};

export default Cart;
