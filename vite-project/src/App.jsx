import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import TarjetaProducto from "./components/TarjetaProducto";
import Navegacion from "./components/Navegacion";
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import BotonPrimario from "./components/BotonPrimario";
import Swal from "sweetalert2";
import "./App.css";
import { Route, Routes } from "react-router-dom";


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [showUserForm, setShowUserForm] = useState(false);
  const [userActionTrigger, setUserActionTrigger] = useState(0);
  const handleEditUser = (user) => {
    setCurrentUser(user);
    setShowUserForm(true);
  };
  const handleSaveUser = () => {
    setCurrentUser(null);
    setShowUserForm(false);
    setUserActionTrigger(prev => prev + 1);
  };
  const handleCancelEdit = () => {
    setCurrentUser(null);
    setShowUserForm(false);
  };
  return (
    <div className='min-h-screen flex flex-col items-center bg-gray-100 p-4'>
      {/* Modifica la Navegación para usar Link en lugar de <a> */}
      <nav className="bg-blue-800 p-4 shadow-md w-full">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-white text-2xl font-bold hover:text-blue-200 transition duration-300">
            Mi tienda online
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="text-white hover:text-blue-200 text-lg transition duration-300">Inicio</Link>
            <Link to="/usuarios" className="text-white hover:text-blue-200 text-lg transition duration-300">Usuarios</Link>

            <Link to="/productos" className="text-white hover:text-blue-200 text-lg transition duration-300">Productos</Link>
            <Link to="/ofertas" className="text-white hover:text-blue-200 text-lg transition duration-300">Ofertas</Link>
            <Link to="/contacto" className="text-white hover:text-blue-200 text-lg transition duration-300">Contacto</Link>
          </div>
        </div>
      </nav>
      <main className="flex flex-col items-center p-4 w-full max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={
            <>
              <h1 className="text-5xl font-extrabold text-blue-700 mb-8">Logitech-Online</h1>
              <h2 className='text-4xl font-bold text-gray-800 mt-12 mb-8'>Nuestros productos</h2>
              <p className="mt-12 text-gray-600">¡Expora nuestra selección!</p>
            </>
          } />



          <Route path="/usuarios" element={
            <>
              <h1 className='text-5xl font-extrabold text-blue-700 mb-8'>Gestión de
                Usuarios</h1>
              {!showUserForm && (
                <div className="mb-8">
                  <BotonPrimario texto="Crear Nuevo Usuario" onClick={() =>

                    setShowUserForm(true)} />
                </div>
              )}
              {showUserForm && (
                <UserForm
                  currentUser={currentUser}
                  onSave={handleSaveUser}
                  onCancel={handleCancelEdit}
                />
              )}
              <UserList
                onEditUser={handleEditUser}
                onUserCreatedOrUpdated={userActionTrigger}
              />
            </>
          } />


          <Route path="/productos" element={
            <>
              <div className=" flex flex-wrap justify-center gap-4">
                <TarjetaProducto

                  nombre="Mouse Gaming RGB (30% OFF)o"
                  precio={'85.000'}
                  imagenUrl={"https://www.steren.com.co/media/catalog/product/cache/bb0cad18a6adb5d17b0efd58f4201a2f/image/22331c7bc/mouse-usb-para-gamers-1200-2400-3200-dpi.jpg"}
                />
                <TarjetaProducto
                  nombre="Smartwatch X1 (50% OFF)"
                  precio={'100.000'}
                  imagenUrl={"https://http2.mlstatic.com/D_NQ_NP_911730-MCO79751492407_102024-O.webp"}
                />


                <TarjetaProducto
                  nombre="Teclado Mecánico (Envío Gratis)"
                  precio={'123.490'}
                  imagenUrl={"https://www.intelcoms.net/wp-content/uploads/2025/01/Teclado-Mecanico-Gamer-Rgb-Redragon-Vara-Reinbow-Negro-Ingles-1.jpg"}
                />

              </div>
            </>
          } />


          <Route path="/ofertas" element={<>
            <div className="w-full text-center">
              <h1 className="text-5xl font-extrabold text-blue-700 mb-8">¡Ofertas Exclusivas!</h1>
              <p className="text-2xl text-gray-700 mb-12">¡No te pierdas esta promoción por tiempo limitado!</p>


              <div className=" flex flex-wrap justify-center gap-4">
                <TarjetaProducto
                  nombre="Smartwatch X1 (50% OFF)"
                  precio={'100.000'}
                  imagenUrl={"https://http2.mlstatic.com/D_NQ_NP_911730-MCO79751492407_102024-O.webp"}
                />


                <TarjetaProducto
                  nombre="Teclado Mecánico (Envío Gratis)"
                  precio={'123.490'}
                  imagenUrl={"https://www.intelcoms.net/wp-content/uploads/2025/01/Teclado-Mecanico-Gamer-Rgb-Redragon-Vara-Reinbow-Negro-Ingles-1.jpg"}
                />


                <TarjetaProducto
                  nombre="Mouse Gaming RGB (30% OFF)o"
                  precio={'85.000'}
                  imagenUrl={"https://www.steren.com.co/media/catalog/product/cache/bb0cad18a6adb5d17b0efd58f4201a2f/image/22331c7bc/mouse-usb-para-gamers-1200-2400-3200-dpi.jpg"}
                />


              </div>
            </div>
          </>} />
          <Route path="/contacto" element={<>
            <div className="w-full max-w-2xl bg-white shadow-xl rounded-lg p-8">
              <h1 className="text-5xl font-extrabold text-blue-700 mb-8 text-center">Contáctanos</h1>
              <p className="text-lg text-gray-700 mb-8 text-center">¿Tienes alguna pregunta, comentario o necesitas ayuda? ¡No dudes en contactarnos!</p>
              <form className="space-y-6" action="">
                <div>
                  <label htmlFor="nombreContacto" className="block text-gray-700 text-sm font-bold mb-2">Tu nombre</label>
                  <input
                    type="text"
                    id="nombreContacto"
                    name="nombre"
                    placeholder="Escribe aqui tu nombre completo"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>


                <div>
                  <label htmlFor="emailContacto" className="block text-gray-700 text-sm font-bold mb-2">
                    Tu Email:
                  </label>
                  <input
                    type="email"
                    id="emailContacto"
                    name="email"
                    placeholder="tu@ejemplo.com"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>


                <div>
                  <label htmlFor="mensajeContacto" className="block text-gray-700 text-sm font-bold mb-2">
                    Tu Mensaje:
                  </label>
                  <textarea
                    id="mensajeContacto"
                    name="mensaje"
                    rows="5"
                    placeholder="Escribe tu mensaje aquí..."
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  ></textarea>
                </div>


                <div className="flex justify-end">
                  <BotonPrimario texto="Enviar Mensaje" type="submit" />
                </div>
              </form>


              <div className="mt-12 text-center text-gray-700">
                <h3 className="text-2xl font-bold mb-4">Tambien puedes encontrarnos en:</h3>
                <p className="mb-2"><strong className="text-blue-600">Teléfono:</strong> +57 123 456 7890</p>
                <p className="mb-2"><strong className="text-blue-600">Horario de Atención:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
                <p className="mb-2"><strong className="text-blue-600">Dirección:</strong> Calle Ficticia 123, Ciudad Ejemplo, País</p>


                <div className="mt-4 flex justify-center space-x-4">
                  {/* Iconos de redes sociales - puedes usar Font Awesome o SVG */}
                  <a href="#" className="text-blue-500 hover:text-blue-700 text-3xl transition duration-300">
                    <i className="fab fa-facebook"></i> {/* Asumiendo Font Awesome */}
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600 text-3xl transition duration-300">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-700 text-3xl transition duration-300">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </>} />
          {/* Ruta de fallback para 404 - no match */}
          <Route path="*" element={<h2 className='text-4xl font-bold text-gray-800 mt-12 mb-8 text-red-500'>404 - Página no encontrada</h2>} />
        </Routes>
      </main>
    </div >
  );
}
export default App;