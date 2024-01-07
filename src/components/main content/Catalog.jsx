import React from "react";
import Card from "./Card.jsx";

export default function Catalog({items}) {
  return (
    <>
      <div className="row">
        {items.map((itemCard) => (
          <Card
            key={itemCard.id}
            title={itemCard.title}
            price={itemCard.price}
            imgLink={itemCard.imgLink}
          />
        ))}
      </div>
    </>
  );
}
