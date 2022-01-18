import '../../Styles/botones.css';

const Contacto = () => {

  return (
    <div className="container text-center">
      <h3 className="mt-5">Contactanos</h3>
      <form>
        <input type="text" className="form-control m-3 inputForm mx-auto" placeholder=" Nombre y apellido"/>
        <input type="number" className="form-control m-3 inputForm mx-auto" placeholder=" Teléfono"/>
        <input type="email" className="form-control m-3 inputForm mx-auto" placeholder=" Email"/>
        <textarea className="form-control m-3 inputForm mx-auto" placeholder=" Dejanos tu mensaje ..."/>
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
  <span>Enviar</span>
</button>
</div>
      </form>
    </div>
  )
}

export default Contacto;