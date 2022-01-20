import { Link } from 'react-router-dom';
import habitacionMatrimonial2 from '../../../Assets/habitacionMatrimonial2.jpg';

const Habitacion3 = () => {
  return (
    <>
     <div className="card" style={{width: '15rem'}}>
       <div className="text-center">
  <img src={habitacionMatrimonial2} className="card-img-top imgbed" alt="" />
       </div>
  <div className="card-body">
    <h5 className="card-title text-center">Habitacion Matrimonial Love</h5>
    <h6 className="text-center">Comodidades:</h6>
    <i className="fas fa-wifi"></i> Internet de alta velocidad free.
    <i className="fas fa-tshirt"></i> Servicio de lavanderia.
    <br/>
      <i className="fas fa-bed"></i> Cama amplia.
      <br/>
      <i className="fas fa-play-circle"></i> Tv plana de 32" full hd.
      <br/>
      <i className="fas fa-broom"></i> Limpieza diaria.
        </div>
    <p class="text-center">Check-in 10Hs - Check-out 20Hs.</p>
    <div className="d-flex justify-content-between m-2">
      <Link to="/" className="text-decoration-none text-black">Ver Más</Link> 
      <Link to="/" className="text-decoration-none text-black">Reservar</Link>
    </div>
  </div>
</>
  )
}

export default Habitacion3;
