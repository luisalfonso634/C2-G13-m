import { Link } from 'react-router-dom';

const PublicarTuHotel = () => {
  return (
    <div className="container text-center">
    <div className="row">
      <div className="col">
      <p>Da de alta tu</p>
      <p>Apartamento, Hotel o casa con Olimpya</p>
      <p>Darse de alta son solo 15 minutos. Empieza hoy mismo</p>
      </div>
      <div className="col">
        <p>Da de alta tu alojamiento</p>
        <p><i className="fas fa-check"></i> Darse de alta es gratis</p>
        <p><i className="fas fa-check"></i> Asistencia 24 horas por teléfono o e-mail</p>
        <p><i className="fas fa-check"></i> Establece tus propias normas para el cliente</p>
        <p><i className="fas fa-check"></i> Sincroniza tu calendario con el de otras webs</p>
        <hr />
        <p>Crea una cuenta de colaborador para empezar:</p>
        <p>Al continuar, aceptas que Olimpya te envíe e-mails sobre el proceso de registro de tu establecimiento.</p>
        <button>Empezar <i className="fas fa-arrow-right"></i></button>
        <hr/>
        <p>¿Ya habías empezado a registrarte?</p>
        <Link to="/login"><button>Iniciar Sesión</button></Link>
      </div>
    </div>
    </div>
  )
}

export default PublicarTuHotel;