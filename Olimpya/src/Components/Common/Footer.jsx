import { Link } from 'react-router-dom';
import favicon from '../Images/favicon.png';

const Footer = () => {
  return (
    <div className="Footer">
      <br/>
    <div className="container text-white">
      <div className="row">
        <div className="col text-center">
          <Link to="/" className="text-decoration-none">
          <h4 className="text-white">Olympia Group.</h4>
          </Link>
          <p>Tu lugar en el mundo.</p>
         <span><img src={favicon} alt="" style={{width:"80px"}}/></span>
        </div>
        <div className="col text-center">
          <ul className="list-unstyled">
            <h4>Categorias</h4>
            <Link to="/" className="text-decoration-none text-white">Viajes</Link>
            <br />
            <Link to="/" className="text-decoration-none text-white">Hoteles</Link>
            <br />
            <Link to="/" className="text-decoration-none text-white">Turismo</Link>
            <br />
            <Link to="/" className="text-decoration-none text-white">Combos</Link>
            <br />
            <Link to="/publicatuhotel" className="text-decoration-none text-white">Publica tu Hotel con nosotros</Link>
          </ul>
        </div>
        <div className="col text-center">
          <h4 className="text-white">Contacto</h4>
          <ul className="list-unstyled">
            <li className="text-white">
              <i className="fas fa-map-marker-alt me-2"></i> Argentina, Buenos Aires
            </li>
            <Link to="/contacto" className="text-white text-decoration-none">
              <i className="far fa-envelope me-2"></i> olimpya@gmail.com
            </Link>
            <li>
             <a href="https://wa.me/+549" target="_blank" rel="noreferrer" className="text-decoration-none text-white"><i className="fab fa-whatsapp me-2 text-white"></i> +54-XXXXXXXX
               </a> 
            </li>
            <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i
                className="fab fa-instagram fa-2x me-2 text-white"></i></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i
                className="fab fa-facebook-square fa-2x me-2 text-white"></i></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i
                className="fab fa-linkedin fa-2x me-2 text-white"></i></a>
            </li>
          </ul>
        </div>
        <div className="col text-center">
          <h4 className="text-white">Sobre Nosotros</h4>
          <ul className="list-unstyled copy">
            <Link to="/" className="text-decoration-none text-white">Sobre Nuestro Proyecto</Link>
            <br />
          <Link to="/" className="text-decoration-none text-white">Quienes Somos</Link>
            <br />
            <Link to="/" className="text-decoration-none text-white">Contactanos</Link>
            <br />
          </ul>
        </div>
      </div>
    </div>
    <div className="container text-center">
      <Link to="/" className="text-white text-decoration-none">&copy; {new Date().getFullYear()}  Copyright | Olimpya No-Country.</Link>
    </div>
  </div>
  )
}

export default Footer;