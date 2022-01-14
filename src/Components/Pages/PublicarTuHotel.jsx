import { Link } from 'react-router-dom';
import '../../Styles/botones.css';
import carrousel1 from '../Images/carrousel1.jpg';
import carrousel2 from '../Images/carrousel2.jpg';
import carrousel3 from '../Images/carrousel3.jpg';

const PublicarTuHotel = () => {
  return (
    <div className="container text-center mt-5">
    <div className="row text-center">
      <div className="col">
      <p>Da de alta tu</p>
      <p>Apartamento, Hotel o casa con Olimpya.</p>
      <p>Darse de alta son solo 15 minutos.</p>
      <p>Empieza hoy mismo</p>
      <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={carrousel1} className="d-block w-100" alt="..." style={{height:"400px"}}/>
    </div>
    <div className="carousel-item">
      <img src={carrousel2} className="d-block w-100" alt="..." style={{height:"400px"}}/>
    </div>
    <div className="carousel-item">
      <img src={carrousel3} className="d-block w-100" alt="..." style={{height:"400px"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>
      </div>
      <div className="col colPublicatuhotel">
        <p>Da de alta tu alojamiento:</p>
        <p><i className="fas fa-check"></i> Darse de alta es gratis</p>
        <p><i className="fas fa-check"></i> Asistencia 24 horas por teléfono o e-mail</p>
        <p><i className="fas fa-check"></i> Establece tus propias normas para el cliente</p>
        <p><i className="fas fa-check"></i> Sincroniza tu calendario con el de otras webs</p>
        <hr />
        <div className="text-center">
        <p>Crea una cuenta de colaborador para empezar:</p>
        <p>Al continuar, aceptas que Olimpya te envíe e-mails sobre el proceso de registro de tu establecimiento.</p>
        </div>
        <div className="d-flex justify-content-center">
        <button className="boton">
  <div className="svg-wrapper-1">
    <div className="svg-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
      </svg>
    </div>
  </div>
  <span>Empezar</span>
</button>
       </div>
        <hr/>
        <p>¿Ya habías empezado a registrarte?</p>
        <Link to="/login" className="text-decoration-none">
        <button className="learn-more boton2">
        <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
        </span>
        <span className="button-text">Iniciar Sesión</span>
     </button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default PublicarTuHotel;