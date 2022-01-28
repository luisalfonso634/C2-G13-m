import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { queryAllRooms } from "../../../config/queries";
import "./boton.css";

const Cards = () => {
  const [id, setId] = useState(false);
  const [cardInfo, setcardInfo] = useState([])
  const { data, loading, errors } = useQuery(queryAllRooms)

  useEffect(() => {
    if (loading) return
    if (!data) return
    setcardInfo(data.allrooms)
  }, [loading, data])

  const renderCard = (card, index) => {
    return (

      <div className="col">
        <div className="card m-2 border-0" style={{ width: "14rem" }} key={index}>
          <div className="card text-white">
            <img className="card-img-top img-fluid" alt="" src={card.image} style={{ width: "100%", height: "150px", border: "0px"}}/>
            <div className="card-img-overlay d-flex justify-content-end">
              <button className="btnFav">
                {!id ? ( <i className="far fa-heart"></i>) : ( <i className="fas fa-heart"></i> )}
              </button>
            </div>
          </div>
          <div className="card-body">
            <h6 className="card-title text-center">{card.title}</h6>
            {id ? card.id : ""}
            <div className="text-center">
            <h6>Comodidades:</h6>
            <span>
              <i className="fas fa-wifi"></i> Internet Fast Free.
            </span>
            <br/>
            <span>
              <i className="fas fa-tshirt"></i> Servicio de lavanderia.
            </span>
            <br/>
            <span>
              <i className="fas fa-bed"></i> Cama Amplia.
            </span>
            <br/>
            <span>
              <i className="fas fa-play-circle"></i> Tv plana de 32" full hd.
            </span>
            <br/>
            <span>
              <i className="fas fa-broom"></i> Limpieza diaria.
            </span>
                </div>
            <div className="text-center">
              {card.In}
              <br />
              {card.Out}
              <div className="d-flex justify-content-center m-2">
                <button
                  type="button"
                  className="btnReserva"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop">
                  <span className="transition"></span>
                  <span className="gradient"></span>
                  <span className="label">Ver Más</span>
                </button>
              </div>
          </div>
        </div>
      </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">{cardInfo.map(renderCard)}</div>
    </div>
  );
};

export default Cards;