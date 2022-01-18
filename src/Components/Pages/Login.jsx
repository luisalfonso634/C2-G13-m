import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    <div className="container text-center">
      <h3 className="mt-5">Iniciar Sesión</h3>
      <form className="container">
        <input type="email" className='form-control m-3 inputForm mx-auto' placeholder=" Email"/>
        <input type="password" className='form-control m-3 inputForm mx-auto' placeholder=" Contraseña"/>
      </form>
      <Link to="/perfilusuario">
        <button className="learn-more boton2">
          <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
        </span>
        <span className="button-text">Iniciar Sesión</span>
     </button>
      </Link>
    </div>
    <br/>
    <br/>
      <div className="d-flex align-items-center justify-content-center">
     <Link to="/registro" className="text-decoration-none">
     <button className="boton">No tienes cuenta? Registrate</button>
     </Link> 
      </div>
          </>
  )
}

export default Login;