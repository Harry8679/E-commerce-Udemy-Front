import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";

export default function Checkout() {
  const { cart } = useContext(CartContext);

  const handleCheckout = async () => {
    const { data } = await axios.post("http://localhost:5000/create-checkout-session", {
      products: cart,
    });
    window.location.href = data.url;
  };

  return (
    <div>
      <h1>Paiement</h1>
      <button onClick={handleCheckout}>Payer avec Stripe</button>
    </div>
  );
}