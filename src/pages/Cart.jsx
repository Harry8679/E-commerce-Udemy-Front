import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Mon Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x {item.price} €
              <button onClick={() => removeFromCart(item.id)}>❌</button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/checkout"><button>Passer au paiement</button></Link>
    </div>
  );
}