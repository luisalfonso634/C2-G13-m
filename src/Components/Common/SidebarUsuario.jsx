import { NavLink } from 'react-router-dom';

const SidebarUsuario = () => {
  return (
    <div className="sidebar">
      <div className="menu p-5">
                  <NavLink to="" className="text-decoration-none text-white mb-3">
                  <i className="fas fa-file-download"></i> Mis Reservas
                  </NavLink>
                    <NavLink to="favoritos" className="text-decoration-none text-white mb-3">
                    <i className="fas fa-star"></i> Favotiros</NavLink>
                    <NavLink to="perfil" className="text-decoration-none text-white mb-3">
                  <i className="fas fa-address-card"></i> Perfil</NavLink>
                    <NavLink to="configuracion" className="text-decoration-none text-white mb-3">
                  <i className="fas fa-cogs"></i> Configuración</NavLink>
                  <div className="salir p-4">
            <NavLink to="/" className="text-decoration-none text-white mb-3">
              <i class="fas fa-reply-all"></i> Salir
            </NavLink>
          </div>
      </div>
    </div>
  )
}

export default SidebarUsuario;