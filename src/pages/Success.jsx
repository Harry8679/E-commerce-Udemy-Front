
import { Link } from "react-router-dom";
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-center p-6">
      {/* <CheckCircleIcon className="w-24 h-24 text-green-500" /> */}
      <CheckCircleIcon className="w-24 h-24 text-green-500" />
      <h1 className="text-3xl font-semibold text-green-700 mt-4">Paiement Réussi 🎉</h1>
      <p className="text-lg text-gray-600 mt-2">
        Merci pour votre achat ! Un email de confirmation vous a été envoyé.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
