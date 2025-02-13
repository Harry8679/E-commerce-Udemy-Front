import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, addToCart, decreaseQuantity } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">🛒 Mon Panier</h1>

        {cart.length === 0 ? (
          <p className="text-lg text-gray-600">Votre panier est vide.</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between border-b pb-4">
                {/* Image */}
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />

                {/* Infos du produit */}
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-semibold text-gray-700">{item.name}</h2>
                  <p className="text-gray-600">{item.price} € / unité</p>
                </div>

                {/* Gestion Quantité */}
                <div className="flex items-center">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded"
                  >
                    ➖
                  </button>
                  <span className="px-4 text-lg">{item.quantity}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded"
                  >
                    ➕
                  </button>
                </div>

                {/* Supprimer l'article */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 text-xl ml-4"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Prix total */}
        <div className="mt-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Total : {totalPrice} €</h2>
          <Link to="/checkout">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Passer au paiement
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
