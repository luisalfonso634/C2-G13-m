import { Link } from "react-router-dom";

const Buscador = () => {
  return (
    <>
      <div className="contenedorBuscador d-flex align-items-center">
        <input
          type="text"
          placeholder=" ¿Adónde Vas?"
          className="form-control m-4"
        />
        <input
          type="text"
          placeholder=" Check-in / Check-out"
          className="form-control m-3 text-center"
        />
        <input
          type="text"
          placeholder=" Adultos? Niños? Habitaciones?"
          className="form-control m-3 text-center"
        />
        <button className="btn btn-success m-4">Buscar</button>
      </div>

      <div className="form-check d-flex m-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" for="flexCheckDefault">
          Viajo por trabajo
        </label>
      </div>
      <br />
      <div className="alert alert-success" role="alert">
        Consigue la información que necesitas. Consulta las últimas
        restricciones por la COVID-19 antes de viajar.
        <Link to="">Más info</Link>
      </div>
      <br />
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body bgImg">
              <br/>
              <br/>
              <h5 class="card-title m-5 text-white">Miramar</h5>
              <p class="card-text text-white">
                218 Alojamientos
              </p>
              <a href="#" class="btn btn-success">
                Reservar
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div className="card-body bgImg">
            <br/>
              <br/>
              <h5 class="card-title m-5 text-white">Santa Teresita</h5>
              <p class="card-text text-white">
               106 Alojamientos
              </p>
              <a href="#" class="btn btn-success">
              Reservar
              </a>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div class="card-group text-white">
  <div class="card">
    <div class="card-body bgImg2">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <div class="card-body bgImg2">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <div class="card-body bgImg2">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<br/>
<p>Busca por tipo de alojamiento</p>
<div className="row">

  <div class="col">
    <div class="card">
      <img src="https://r-cf.bstatic.com/images/hotel/max1024x768/160/160310270.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src="https://r-cf.bstatic.com/images/hotel/max1024x768/160/160310270.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src="https://r-cf.bstatic.com/images/hotel/max1024x768/160/160310270.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src="https://r-cf.bstatic.com/images/hotel/max1024x768/160/160310270.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src="https://r-cf.bstatic.com/images/hotel/max1024x768/160/160310270.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src="https://r-cf.bstatic.com/images/hotel/max1024x768/160/160310270.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <br/>
  <p>Descubre Argentina</p>
  <br/>
  <div className="row">
  <div class="card text-dark bg-light mb-3">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Light card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
  </div>
</div>
    </>
  );
};

export default Buscador;
