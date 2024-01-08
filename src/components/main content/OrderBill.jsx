import React from "react";
import CardOrder from "./CardOrder";

export default function OrderBill({ cart, dispatch }) {
  return (
    <>
      <div>
        {cart.map((item) => (
          <CardOrder key={item.id} item={item} dispatch={dispatch} />
        ))}
      </div>

      <p>card checkout</p>
    </>
  );
}
