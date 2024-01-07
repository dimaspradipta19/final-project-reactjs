import React from "react";
import Catalog from "./Catalog";
import OrderBill from "./OrderBill";
import { data } from "./data.js";

export default function MainContent() {
  return (
    <div className="row">
      <div className="col-9">
        <Catalog items={data} />
      </div>
      <div className="col-3">
        <OrderBill />
      </div>
    </div>
  );
}
