import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light NAVBAR">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white">
          Olympia
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active text-white">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/alojamiento" className="nav-link active text-white">
                Alojamiento
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/atracciones_turisticas" className="nav-link active text-white">
                Atracciones Turísticas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contacto" className="nav-link active text-white">
                Contacto
              </Link>
            </li>
          </ul>
            <div className="d-flex">
              <Link to="login" className="text-decoration-none text-white">
                Login
              </Link>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
