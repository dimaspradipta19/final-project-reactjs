import React from "react";
import Card from "./Card.jsx";

export default function Catalog({ items, dispatch }) {
  const handleAddToCart = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  };

  return (
    <>
      <div className="row">
        {items.map((itemCard) => (
          <Card
            key={itemCard.id}
            title={itemCard.title}
            price={itemCard.price}
            imgLink={itemCard.imgLink}
            onAddToCart={() => handleAddToCart(itemCard)}
          />
        ))}
      </div>
    </>
  );
}
