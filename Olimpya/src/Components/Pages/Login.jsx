import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container text-center">
      <h3 className="mt-5">Iniciar Sesión</h3>
      <form className="container">
        <input type="email" className='form-control m-3 inputForm mx-auto' placeholder=" Email"/>
        <input type="password" className='form-control m-3 inputForm mx-auto' placeholder=" Contraseña"/>
      </form>
      <Link to="/perfilusuario">
        <button class="learn-more boton2">
        <span class="circle" aria-hidden="true">
        <span class="icon arrow"></span>
        </span>
        <span class="button-text">Iniciar Sesión</span>
     </button>
      </Link>
      <div className="mb-3">
     <Link to="/registro" className="text-decoration-none">
     <button className="boton">No tienes cuenta? Registrate</button>
     </Link> 
      </div>
    </div>
  )
}

export default Login;