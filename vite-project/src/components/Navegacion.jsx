import React from "react";
import { Link } from "react-router-dom"; // Importa Link
const Navegacion = ()=>{
    return (
        <nav className="bg-blue-800 p-4 shadow-md w-full">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/" className="text-white text-2xl font-bold hover:text-blue-200 transition duration-300">
                    Logitech 🖱
                </Link>
                <div className="flex space-x-6">
                    <Link to="/" className="text-white hover:text-blue-200 text-lg transition duration-300">Inicio 🏠</Link>
                    <Link to="/usuarios" className="text-white hover:text-blue-200 text-lg transition duration-300">Usuarios 👦</Link>
                    <Link to="/productos" className="text-white hover:text-blue-200 text-lg transition duration-300">Productos 🛍</Link>
                    <Link to="/ofertas" className="text-white hover:text-blue-200 text-lg transition duration-300">Ofertas 📉</Link>
                    <Link to="/contacto" className="text-white hover:text-blue-200 text-lg transition duration-300">Contacto 📲</Link>
                </div>
            </div>
        </nav>
    );
}
export default Navegacion