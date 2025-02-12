import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "Apple", price: 10, image: "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Bananas", price: 20, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export default function Home() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-6">Nos Produits</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border shadow-lg rounded-lg p-4 bg-white">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-cover rounded-md" 
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-700">{product.price} €</p>
            <button 
              onClick={() => addToCart(product)} 
              className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}