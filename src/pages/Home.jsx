import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "Pomme", price: 10, image: "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Banane", price: 20, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Orange", price: 15, image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3JhbmdlfGVufDB8fDB8fHww" },
  { id: 4, name: "Avocat", price: 11, image: "https://media.istockphoto.com/id/94929126/fr/photo/avocat-isol%C3%A9-sur-blanc.webp?a=1&b=1&s=612x612&w=0&k=20&c=9dmy2uHolox6qFKFD3fQwZdfD0cdJnHcwTW0LjK_EN4=" },
  { id: 5, name: "Ananas", price: 14, image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5hbmFzfGVufDB8fDB8fHww" },
  { id: 6, name: "Pamplemousse", price: 7, image: "https://plus.unsplash.com/premium_photo-1706470794654-c3c70b98a7ca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBhbXBsZW1vdXNzZXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 7, name: "Cerise", price: 5, image: "https://images.unsplash.com/photo-1528820600606-0ef5600cbfee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VyaXNlfGVufDB8fDB8fHww" },
  { id: 8, name: "Kiwi", price: 12, image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l3aXxlbnwwfHwwfHx8MA%3D%3D" },
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