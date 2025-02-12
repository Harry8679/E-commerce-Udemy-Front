import React, { useState } from "react";
import { signInWithGoogle, auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    const loggedUser = await signInWithGoogle();
    if (loggedUser) setUser(loggedUser);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold flex items-center">
        🛒 E-Commerce
      </Link>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-gray-400">Accueil</Link>
        <Link to="/shop" className="hover:text-gray-400">Boutique</Link>
        <Link to="/cart" className="hover:text-gray-400">Panier</Link>

        {user ? (
          <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
            Déconnexion
          </button>
        ) : (
          <button onClick={handleLogin} className="bg-blue-500 px-4 py-2 rounded">
            Connexion
          </button>
        )}
      </div>
    </nav>
  );
}