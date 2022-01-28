import { useState } from "react";
import { Link } from "react-router-dom";
import ModalReserva from "../Common/ModalReserva";
import Cards from "./Cards/Cards";

const Home = () => {
  const [idModal, setIdModal] = useState({idmodal: 0, roomdata: {}})
  const handleChange = (newidmodal) => {
    /*e.preventDefault();
    let idmodal = e.target.getAttribute("data-id")
    window.localStorage.setItem("idmodal", idmodal)*/
    setIdModal(newidmodal)
  }
  return (
    <>
      <ModalReserva values={idModal}/>
      <div className="container">
        <h1 className="text-center m-5">Nuestras Habitaciones</h1>
        <Cards values={idModal} onChange={handleChange} />
        <br />
        <div className="alert alert-success" role="alert">
          Consigue la información que necesitas. Consulta las últimas
          restricciones por la COVID-19 antes de viajar.
          <Link to="/"> Más info</Link>
        </div>
      </div>
    </>
  );
};

export default Home;