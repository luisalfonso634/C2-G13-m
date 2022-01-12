import { Link } from 'react-router-dom';
import favicon from '../Images/favicon.png';

const Footer = () => {
  return (
    <div className="">
      <hr/>
    <div className="container text-black">
      <div className="row">
        <div className="col text-center">
          <Link to="/" className="text-decoration-none text-black">
          <h4 className="copy">Olympia Group.</h4>
          </Link>
          <p className="copy">Tu lugar en el mundo.</p>
         <span><img src={favicon} alt="" style={{width:"80px"}}/></span>
        </div>
        <div className="col text-center">
          <ul className="list-unstyled">
            <h4 className="copy text-black">Categorias</h4>
            <Link to="/" className="text-decoration-none text-black">Viajes</Link>
            <br />
            <Link to="/" className="text-decoration-none text-black">Hoteles</Link>
            <br />
            <Link to="/" className="text-decoration-none text-black">Turismo</Link>
            <br />
            <Link to="/" className="text-decoration-none text-black">Combos</Link>
            <br />
            <Link to="/" className="text-decoration-none text-black">Publica tu Hotel con nosotros</Link>
          </ul>
        </div>
        <div className="col text-center">
          <h4 className="text-black">Contacto</h4>
          <ul className="list-unstyled copy">
            <li className="text-black">
              <i className="fas fa-map-marker-alt me-2"></i> Argentina, Buenos Aires
            </li>
            <Link to="/contacto" className="text-black text-decoration-none">
              <i className="far fa-envelope me-2"></i> olimpya@gmail.com
            </Link>
            <li>
             <a href="https://wa.me/+549" target="_blank" rel="noreferrer" className="text-decoration-none text-black"><i className="fab fa-whatsapp me-2"></i> +54-XXXXXXXX
               </a> 
            </li>
            <li className="text-black">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i
                className="fab fa-instagram fa-2x me-2"></i></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i
                className="fab fa-facebook-square fa-2x me-2"></i></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i
                className="fab fa-linkedin fa-2x me-2"></i></a>
            </li>
          </ul>
        </div>
        <div className="col text-center">
          <h4 className="text-black">Sobre Nosotros</h4>
          <ul className="list-unstyled copy">
            <Link to="/" className="text-decoration-none text-black">Sobre Nuestro Proyecto</Link>
            <br />
          <Link to="/" className="text-decoration-none text-black">Quienes Somos</Link>
            <br />
            <Link to="/" className="text-decoration-none text-black">Contactanos</Link>
            <br />
          </ul>
        </div>
      </div>
    </div>
    <hr />
    <div className="container text-center">
      <Link to="/" className="text-black text-decoration-none">&copy; {new Date().getFullYear()}  Copyright | Olimpya No-Country.</Link>
    </div>
  </div>
  )
}

export default Footer;