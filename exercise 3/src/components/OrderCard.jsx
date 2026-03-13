import React from "react";

export default function OrderCard({ product, price, quantity, onAdd, onSub }) {
  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>{price}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" onClick={onSub}>-</div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={onAdd}>+</div>
      </div>
    </div>
  );
}