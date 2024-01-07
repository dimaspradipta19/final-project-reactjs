import React from "react";
// import { useDispatch, useSelector } from "./CartReducer.jsx";

export default function Card({ id, imgLink, price, title }) {
  // const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart);

  // const addToCart = (item) => {
  //   dispatch({ type: "ADD_TO_CART", payload: item });
  // };

  // const removeFromCart = (item) => {
  //   dispatch({ type: "REMOVE_FROM_CART", payload: item });
  // };

  // const clearCart = () => {
  //   dispatch({ type: "CLEAR_CART" });
  // };

  // const calculateTotal = () => {
  //   return cart.reduce((total, item) => total + item.price, 0);
  // };

  return (
    <>
      <div className="card m-2" style={{ width: 200 }}>
        <img
          src={imgLink}
          width={100}
          height={200}
          className="card-img-top"
          alt={id}
        />

        <div className="card-body">
          <p className="card-title">{title}</p>
          <p className="card-price">{price}</p>
          <div className="row">
            <button type="button" className="btn btn-primary ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
