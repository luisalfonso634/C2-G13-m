import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light NAVBAR">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
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
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Alojamiento
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Vuelos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Alquiler de coches
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                atracciones turísticas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contacto" className="nav-link active">
                Contacto
              </Link>
            </li>
            <ul className="d-flex justify-content-end">
            <li className="nav-item d-flex">
              <Link to="login" className="nav-link">
                Login
              </Link>
            </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
