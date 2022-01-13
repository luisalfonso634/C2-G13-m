import { Link } from 'react-router-dom';

const SidebarUsuario = () => {
  return (
    <div className="sidebar">
                 <ul>
                <li><i className="fas fa-file-download"></i> Mis Reservas</li>
              <li><i className="fas fa-star"></i> Favotiros</li>
              <li><i className="fas fa-address-card"></i> Perfil</li>
              <li><i className="fas fa-cogs"></i> Configuración</li>
              <Link to="/" className="text-decoration-none text-white">
              <li><i className="fas fa-sign-out-alt"></i> Salir</li>
              </Link>
          </ul>
    </div>
  )
}

export default SidebarUsuario;