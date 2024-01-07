import React, { useReducer } from "react";
import Catalog from "./Catalog";
import OrderBill from "./OrderBill";
import { data } from "./data.js";
import { cartReducer } from "./cartReducer.js";

export default function MainContent() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <div className="row">
      <div className="col-9">
        <Catalog items={data} dispatch={dispatch} />
      </div>
      <div className="col-3">
        <OrderBill cart={cart} />
      </div>
    </div>
  );
}
