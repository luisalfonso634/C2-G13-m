import React from 'react'

const Contacto = () => {
  return (
    <div className="container text-center">
      <h3>Contactanos</h3>
      <br/>
      <form>
        <input type="text" className="form-control mb-3" placeholder=" Nombre y apellido"/>
        <input type="email" className="form-control mb-3" placeholder=" Email"/>
        <textarea className="form-control mb-3" placeholder=" Dejanos tu mensaje ..."/>
        <button className="btn">Enviar</button>
      </form>
    </div>
  )
}

export default Contacto;