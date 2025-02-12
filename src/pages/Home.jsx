import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "Apple", price: 10, image: "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Bananas", price: 20, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export default function Home() {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h1>Produits</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} width="150" />
            <h3>{product.name}</h3>
            <p>{product.price} €</p>
            <button onClick={() => addToCart(product)}>Ajouter au panier</button>
          </div>
        ))}
      </div>
    </div>
  );
}