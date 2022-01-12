import { Link } from 'react-router-dom';

const Registro = () => {
  return (
    <div className="container text-center">
    <h3>Registrarme</h3>
    <form>
      <input type="text" className='form-control m-3' placeholder=" Nombre y apellido"/>
      <input type="email" className='form-control m-3' placeholder=" Email"/>
      <input type="password" className='form-control m-3' placeholder=" Contraseña"/>
    </form>
    <Link to="/perfilusuario"><button className="btn">Registrarme</button></Link>
    <br/>
     <Link to="/login">
     <p>Tienes cuenta? Inicia Sesión</p>
     </Link> 
  </div>
  )
}

export default Registro;