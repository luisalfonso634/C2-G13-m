import React from 'react'

const Alojamiento = () => {
  return (
    <div className="container text-center">
      <br/>
      <h3>Nuestras Comodidades</h3>
      <div className="row">
        <div className="col columnas">
        <br/>
          De la propiedad:
          <br/>
          <i className="fas fa-parking"></i> Parki gratis.
          <br/>
          <i className="fas fa-wifi"></i> Internet de alta velocidad free.
          <br/>
          <i className="fas fa-smoking-ban"></i> Zona libre de humo.
          <br/>
          <i className="fas fa-utensils"></i> Restaurant disponible toda la estadia.
          <br/>
          <i className="fas fa-desktop"></i> Resepción las 24 hs.
          <br/>
          <i className="fas fa-share-alt"></i> Salón de usos compartidos SUM.
          <br/>
          <i className="fas fa-tshirt"></i> Servicio de lavanderia y planchado.
        </div>
        <div className="col">
          <br/>
        características de las habitaciones:
      <br/>
      <i className="fas fa-bed"></i> Camas amplias.
      <br/>
      <i className="fas fa-play-circle"></i> Tv plana de 32" full hd.
      <br/>
      <i className="fas fa-broom"></i> Limpieza diaria.
        </div>
      </div>
    </div>
  )
}

export default Alojamiento;