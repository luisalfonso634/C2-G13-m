import { Link } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "./../../context/UserContext";

const NavbarUsuario = () => {
  const { setIsLogged, setUserId } = useContext(UserContext)
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light NavUsuario">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="nav-link active text-white" aria-current="page">Hotel Olympia</span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul  className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Hola {JSON.parse(localStorage.getItem("user")).name}
            </span>
            <ul className="dropdown-menu text-center" aria-labelledby="navbarDropdown">
              <Link to="" className="text-decoration-none text-black">
                <span className="dropdown-item" href="#"><i className="fas fa-file-download"></i> Mis Reservas</span>
              </Link>
              <li><hr className="dropdown-divider" /></li>
             <Link to="favoritos"  className="text-decoration-none text-black">
                <span className="dropdown-item" href="#"></span><i className="fas fa-star"></i> Favotiros
             </Link>
              <li><hr className="dropdown-divider" /></li>
              <Link to="perfil"  className="text-decoration-none text-black">
                <span className="dropdown-item" href="#"><i className="fas fa-address-card"></i> Perfil</span>
              </Link>
              <li><hr className="dropdown-divider" /></li>
              <Link  to="configuracion" className="text-decoration-none text-black">
              <span className="dropdown-item" href="#"><i className="fas fa-cogs"></i> Configuración</span>
              </Link>
              <li><hr className="dropdown-divider" /></li>
            <Link to="/"  className="text-decoration-none text-black">
              <span className="dropdown-item" href="#"
                   onClick={() => {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                    localStorage.removeItem("userId")
                    localStorage.removeItem("userRegister")
                    setIsLogged(false)
                    setUserId("")}}> 
                <i className="fas fa-sign-out-alt"></i> Salir</span></Link>
          </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default NavbarUsuario;