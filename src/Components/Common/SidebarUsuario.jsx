import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "./../../context/UserContext";

const SidebarUsuario = () => {
  const { setIsLogged, setUserId } = useContext(UserContext)
  return (
    <div className="sidebar">
      <div className="menu p-5">
        <div className="container text-capitalize">
        <h4>Hola {JSON.parse(localStorage.getItem("user")).name}</h4>
        </div>
                  <NavLink to="" className="text-decoration-none text-white mb-3">
                  <i className="fas fa-file-download"></i> Mis Reservas
                  </NavLink>
                    <NavLink to="favoritos" className="text-decoration-none text-white mb-3">
                    <i className="fas fa-star"></i> Favoritos</NavLink>
                    <NavLink to="configuracion" className="text-decoration-none text-white mb-3">
                  <i className="fas fa-cogs"></i> Configuración</NavLink>
                  <div className="salir p-4">
            <NavLink to="/" className="text-decoration-none text-white mb-3">
              <span className="btn-outline" 
                onClick={() => {
                  localStorage.removeItem("token")
                  localStorage.removeItem("user")
                  localStorage.removeItem("userId")
                  localStorage.removeItem("userRegister")
                  setIsLogged(false)
                  setUserId("")}}> 
                  <i className="fas fa-reply-all"></i> Salir 
                </span>
            </NavLink>
          </div>
      </div>
    </div>
  )
}

export default SidebarUsuario;