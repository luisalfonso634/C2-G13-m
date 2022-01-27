import { Link } from "react-router-dom";
import ModalProyecto from "../Common/ModalProyecto";
import ModalReserva from "../Common/ModalReserva";
import Cards from "./Cards/Cards";

const Home = () => {
  return (
    <>
      <ModalReserva />
      <div className="container">
        <h1 className="text-center m-5">Nuestras Habitaciones</h1>
        <Cards />
        <br />
        <div className="alert alert-success text-center" role="alert">
          <span>Consigue la información que necesitas. Consulta las últimas
          restricciones por COVID-19 antes de viajar.</span>
          <Link to="/">Más info</Link>
        </div>
      </div>
      <ModalProyecto/>
    </>
  );
};

export default Home;