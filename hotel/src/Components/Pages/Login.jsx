import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container text-center">
      <h3>Iniciar Sesión</h3>
      <form>
        <input type="email" className='form-control m-3' placeholder=" Email"/>
        <input type="password" className='form-control m-3' placeholder=" Contraseña"/>
      </form>
      <Link to="/perfilusuario"><button className="btn">Iniciar Sesión</button></Link>
      <br/>
     <Link to="/registro">
     <p>No tienes cuenta? Registrate</p>
     </Link> 
    </div>
  )
}

export default Login;