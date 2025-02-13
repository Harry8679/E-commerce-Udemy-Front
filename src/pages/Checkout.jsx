import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Charger Stripe avec la clé publique
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export default function Checkout() {
  const { cart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Calcul du prix total
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (cart.length === 0) {
      setErrorMessage("Votre panier est vide.");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const { data } = await axios.post("http://localhost:7500/create-checkout-session", {
        products: cart,
      });

      console.log("🔄 Réponse Stripe :", data); // Debugging

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("⚠️ Aucune URL Stripe retournée.");
      }
    } catch (error) {
      console.error("❌ Erreur de paiement :", error);
      setErrorMessage(error.response?.data?.error || "Une erreur est survenue lors du paiement. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Paiement</h1>

          {errorMessage && (
            <div className="mb-4 text-red-600 bg-red-100 p-3 rounded-lg border border-red-400">
              {errorMessage}
            </div>
          )}

          <button
            onClick={handleCheckout}
            disabled={loading}
            className={`w-full text-white px-6 py-3 rounded-lg transition 
              ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}
            `}
          >
            {loading ? "Redirection en cours..." : `Payer ${totalPrice.toFixed(2)} € avec Stripe`}
          </button>
        </div>
      </div>
    </Elements>
  );
}