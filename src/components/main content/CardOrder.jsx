import React from "react";

export default function CardOrder({
  item,
  dispatch,
}) {
  const { id, title, quantity, totalPrice } = item;

  const handleIncrease = () => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: { id },
    });
  };

  const handleDecrease = () => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: { id },
    });
  };

  return (
    <div>
      <div className="card">
        <div className="card-body row">
          <h5 className="card-title col">
            {title} {id}
          </h5>
          <p className="card-text col">{totalPrice}</p>
          <div className="row">
            <button
              onClick={handleDecrease}
              type="button"
              className="btn btn-primary col"
            >
              -
            </button>
            <p className="col">{quantity}</p>
            <button
              onClick={handleIncrease}
              type="button"
              className="btn btn-primary col"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
