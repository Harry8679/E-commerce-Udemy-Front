import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";

export default function Checkout() {
  const { cart } = useContext(CartContext);

  const handleCheckout = async () => {
    try {
      const { data } = await axios.post("http://localhost:7500/create-checkout-session", {
        products: cart,
      });
      window.location.href = data.url;
    } catch (error) {
      console.error("Erreur de paiement :", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Paiement</h1>
      <button 
        onClick={handleCheckout} 
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
      >
        Payer avec Stripe
      </button>
    </div>
  );
}