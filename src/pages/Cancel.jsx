import { Link } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/outline";

export default function Cancel() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-center p-6">
      <XCircleIcon className="w-24 h-24 text-red-500" />
      <h1 className="text-3xl font-semibold text-red-700 mt-4">Paiement Annulé ❌</h1>
      <p className="text-lg text-gray-600 mt-2">
        Votre transaction a été annulée. Vous pouvez réessayer si vous le souhaitez.
      </p>
      <Link
        to="/checkout"
        className="mt-6 px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
      >
        Réessayer le paiement
      </Link>
    </div>
  );
}