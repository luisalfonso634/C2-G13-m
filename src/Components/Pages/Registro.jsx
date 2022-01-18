import { Link } from 'react-router-dom';

const Registro = () => {
  return (
    <>
    <div className="container text-center">
    <h3 className="mt-5">Registrarme</h3>
    <form>
      <input type="text" className='form-control m-3 inputForm mx-auto' placeholder=" Nombre"/>
      <input type="text" className='form-control m-3 inputForm mx-auto' placeholder=" Apellido"/>
      <input type="text" className='form-control m-3 inputForm mx-auto' placeholder=" Teléfono"/>
      <input type="email" className='form-control m-3 inputForm mx-auto' placeholder=" Email"/>
      <input type="password" className='form-control m-3 inputForm mx-auto' placeholder=" Contraseña"/>
      <input type="password" className='form-control m-3 inputForm mx-auto' placeholder=" Repeti tu Contraseña"/>
    </form>
    <Link to="/perfilusuario">
        <button class="learn-more boton2">
        <span class="circle" aria-hidden="true">
        <span class="icon arrow"></span>
        </span>
        <span class="button-text">Registrarme</span>
     </button>
      </Link>
  </div>
    <br/>
    <br/>
    <div className="d-flex justify-content-center">
     <Link to="/login" className="text-decoration-none">
     <button className="boton">Tienes cuenta? Inicia Sesión</button>
     </Link> 
    </div>
    </>
  )
}

export default Registro;