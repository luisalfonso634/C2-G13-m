import { Link } from 'react-router-dom';
import SidebarUsuario from './SidebarUsuario';

const NavbarUsuario = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light NavUsuario">
    <div className="container-fluid">
      <span className="navbar-brand text-white" href="#">Olimpya</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <span className="nav-link active text-white" aria-current="page" href="#">Inicio</span>
          </li>
            </ul>
          <ul  className="navbar-nav ml-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Nombre del Usuario
            </span>
            <ul className="dropdown-menu text-center" aria-labelledby="navbarDropdown">
              <li><span className="dropdown-item" href="#"><i className="fas fa-file-download"></i> Mis Reservas</span></li>
              <li><hr className="dropdown-divider" /></li>
              <li><span className="dropdown-item" href="#"></span><i className="fas fa-star"></i> Favotiros</li>
              <li><hr className="dropdown-divider" /></li>
              <li><span className="dropdown-item" href="#"><i className="fas fa-address-card"></i> Perfil</span></li>
              <li><hr className="dropdown-divider" /></li>
              <li><span className="dropdown-item" href="#"><i className="fas fa-cogs"></i> Configuración</span></li>
              <li><hr className="dropdown-divider" /></li>
            <Link to="/"><li><span className="dropdown-item" href="#"><i className="fas fa-sign-out-alt"></i> Salir</span></li>  </Link>
          </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
<SidebarUsuario/>
  </div>
  )
}

export default NavbarUsuario;