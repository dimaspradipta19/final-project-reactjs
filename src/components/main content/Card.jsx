import React from "react";
// import { useDispatch, useSelector } from "./CartReducer.jsx";

export default function Card({ id, imgLink, price, title, onAddToCart }) {
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
            <button
              onClick={onAddToCart}
              type="button"
              className="btn btn-primary "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
