import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Vérifie si un utilisateur est connecté
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error.message);
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🛒 E-Commerce</h1>
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">Accueil</Link>
        <Link to="/shop" className="hover:underline">Boutique</Link>
        <Link to="/cart" className="hover:underline">Panier</Link>

        {user ? (
          <>
            <span className="text-green-400">Bienvenue, {user.displayName || "Utilisateur"} !</span>
            <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
              Déconnexion
            </button>
          </>
        ) : (
          <Link to="/login" className="bg-blue-500 px-4 py-2 rounded">Connexion</Link>
        )}
      </div>
    </nav>
  );
}