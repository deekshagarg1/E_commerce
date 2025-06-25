import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { Cart2 } from "./Cart2";
import { Cartfinal } from "./Cartfinal";
import { RazorPay } from "./images/RazorPay";

export const Cart = ({ cartItem, liked }) => {
  const [product, setproduct] = useState([]);

  // Add item to cart and update localStorage
  function cart(item) {
    const existingItem = product.find((p) => p.tittle === item.tittle);
    let updatedCart;

    if (existingItem) {
      updatedCart = product.map((p) =>
        p.tittle === item.tittle
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );
    } else {
      updatedCart = [...product, { ...item, quantity: 1 }];
    }

    setproduct(updatedCart);
  }

  // Load cart from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cfinal"));
    if (stored) {
      setproduct(stored);
    }
  }, []);

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cfinal", JSON.stringify(product));
  }, [product]);

  // Calculate total price
  const sum = product.reduce(
    (total, item) => total + parseInt(item.price) * item.quantity,
    0
  );

  return (
    <>
      <div className="cart1">
        <div className="cartaa">
          {cartItem.map((item) => (
            <div className="carta" key={item.tittle}>
              <Cart2 item={item} cart={cart} liked={liked} />
            </div>
          ))}
        </div>

        <div className="cartbb">
          <div className="cart-headline">
            <h1>Products</h1>
            {product.map((item, index) => (
              <Cartfinal
                key={index}
                item={item}
                setproduct={setproduct}
                product={product}
              />
            ))}
            <li className="l11">
              <h2>Total Amount</h2>
              <p>+ ₹{sum * 0.9}</p>
            </li>
          </div>

          <div className="cartb">
            <li>
              <p>Price of ({product.length}) item</p>
              <p>₹{sum}</p>
            </li>
            <li>
              <p>Discount</p>
              <s style={{ color: "green" }}> ₹{sum * 0.1}</s>
            </li>
            <li>
              <p>Delivery Fee</p>
              <p style={{ color: "gray" }}>Free</p>
            </li>
            <li>
              <p>Total Amount</p>
              <p>+ ₹{sum * 0.9}</p>
            </li>
          </div>

          <RazorPay sum={sum} />
        </div>
      </div>
    </>
  );
};

