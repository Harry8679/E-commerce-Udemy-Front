import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebaseConfig"; // Assurez-vous que signInWithGoogle est bien exporté
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

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Erreur lors de la connexion :", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error.message);
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold flex items-center">
        🛒 E-Commerce
      </Link>

      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:text-gray-400">Accueil</Link>
        <Link to="/shop" className="hover:text-gray-400">Boutique</Link>
        <Link to="/cart" className="hover:text-gray-400">Panier</Link>

        {user ? (
          <div className="flex items-center gap-3">
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="Avatar"
                className="w-8 h-8 rounded-full border"
              />
            )}
            <span className="text-green-400">{user.displayName || "Utilisateur"}</span>
            <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
              Déconnexion
            </button>
          </div>
        ) : (
          <button onClick={handleLogin} className="bg-blue-500 px-4 py-2 rounded">
            Connexion
          </button>
        )}
      </div>
    </nav>
  );
}