
const Perfil = () => {
  return (
    <div className="d-flex justify-content-center m-3">
    <div className="d-flex justify-content-end">
      <img src="" alt="" className="rounded-circle" style={{height:"100px", width:"100px"}}/>
    <div className="flex-direction-end">
    <button className="btn">
    <i className="fas fa-camera"></i>
    </button>
    </div>
    </div>
    <br/>
    <div className="container">
    <div className="row">
      <div className="col colPerfil">
    <span>Nombre:</span>
    <span>Apellido:</span>
    <span>DNI:</span>
    <span>Dirección</span>
    <span>Correo:</span>
    <span>Teléfono:</span>
    <br/>
    <span>Fecha de último inicio de sesión:</span>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Perfil;