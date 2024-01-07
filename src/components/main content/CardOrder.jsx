import React from "react";

export default function CardOrder() {
  return (
    <div>
      <div className="card">
        <div className="card-body row">
          <h5 className="card-title col">Kucing Irenk</h5>
          <p className="card-text col">100.000</p>
          <div className="row">
            <button type="button" className="btn btn-primary col">
              -
            </button>
            <p className="col">0</p>
            <button type="button" className="btn btn-primary col">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
