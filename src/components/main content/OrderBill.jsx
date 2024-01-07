import React from "react";
import CardOrder from "./CardOrder";

export default function OrderBill({ cart }) {
  return (
    <div>
      {cart.map((item) => (
        <CardOrder
          key={item.id}
          title={item.title}
          price={item.price}
          // Add other props as needed
        />
      ))}
    </div>
  );
}
