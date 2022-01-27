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

  /*  const cardInfo = [
      {
        id: "25253",
        image: "https://i.ibb.co/pJF6Z5v/habitacion-Matrimonial.jpg",
        title: "Habitacion Matrimonial Classic",
        text: "lorem",
        in: "Checkin 09Hs",
        out: "Checkout 20Hs",
        precio: "Precio por noche $6.000",
      },
      {
        id: "28795",
        image: "https://i.ibb.co/NxXPBqf/premium-Bed.jpg",
        title: "Habitacion Matrimonial Premium",
        text: "lorem",
        in: "Checkin 10Hs",
        out: "Checkout 21Hs",
        precio: "Precio por noche $4.500",
      },
      {
        id: "45755",
        image: "https://i.ibb.co/n86YxWg/habitacion-Matrimonial2.jpg",
        title: "Habitacion Matrimonial Love",
        text: "lorem",
        in: "Checkin 08Hs",
        out: "Checkout 19Hs",
        precio: "Precio por noche $3.500",
      },
      {
        id: "43872",
        image: "https://i.ibb.co/BVc5yyT/habitacion-Matrimonial3.jpg",
        title: "Habitacion Matrimonial Vintage",
        text: "lorem",
        in: "Checkin 09Hs",
        out: "Checkout 20Hs",
        precio: "Precio por noche $2.500",
      },
      {
        id: "13456",
        image: "https://i.ibb.co/Mp0prpd/hab-Individual.jpg",
        title: "Habitacion Individual Single",
        text: "lorem",
        in: "Checkin 07Hs",
        out: "Checkout 18Hs",
        precio: "Precio por noche $2.000",
      },
      {
        id: "65946",
        image: "https://i.ibb.co/8NXTWS1/hab-Individual2.jpg",
        title: "Habitacion Individual Classic",
        text: "lorem",
        in: "Checkin 11Hs",
        out: "Checkout 21Hs",
        precio: "Precio por noche $3.500",
      },
      {
        id: "47319",
        image: "https://i.ibb.co/M9rHLMQ/hab-Individual3.jpg",
        title: "Habitacion Individual Red & White",
        text: "lorem",
        in: "Checkin 08Hs",
        out: "Checkout 17Hs",
        precio: "Precio por noche $5.000",
      },
      {
        id: "93854",
        image: "https://i.ibb.co/3TX3QLt/hab-Individual4.jpg",
        title: "Habitacion Individual Stack",
        text: "lorem",
        in: "Checkin 06Hs",
        out: "Checkout 19Hs",
        precio: "Precio por noche $8.000",
      },
      {
        id: "10279",
        image: "https://i.ibb.co/SnqS3wZ/familiar1.jpg",
        title: "Habitacion Familiar Premium",
        text: "lorem",
        in: "Checkin 09Hs",
        out: "Checkout 20Hs",
        precio: "Precio por noche $8.500",
      },
      {
        id: "63987",
        image: "https://i.ibb.co/2Ygbv5G/familiar2.jpg",
        title: "Habitacion Familiar Confort",
        text: "lorem",
        in: "Checkin 10Hs",
        out: "Checkout 21Hs",
        precio: "Precio por noche $9.000",
      },
      {
        id: "68742",
        image: "https://i.ibb.co/KqLtjwf/familiar3.jpg",
        title: "Habitacion Familiar Retro Pro",
        text: "lorem",
        in: "Checkin 10Hs",
        out: "Checkout 17Hs",
        precio: "Precio por noche $8.500",
      },
      {
        id: "59874",
        image: "https://i.ibb.co/P4R3tnm/familiar4.jpg",
        title: "Habitacion Familiar Pro Mint",
        text: "lorem",
        in: "Checkin 09Hs",
        out: "Checkout 20Hs",
        precio: "Precio por noche $4.000",
      },
    ];*/

  const renderCard = (card, index) => {
    return (
      <div className="col">
        <div className="card m-2" style={{ width: "14rem" }} key={index}>
          <div className="card text-white">
            <img
              className="card-img-top img-fluid"
              alt=""
              src={card.image}
              style={{ width: "250px", height: "150px" }}
            />
            <div className="card-img-overlay d-flex justify-content-end">
              <button className="btnFav">
                {!id ? (
                  <i className="far fa-heart"></i>
                ) : (
                  <i className="fas fa-heart"></i>
                )}
              </button>
            </div>
          </div>
          <div className="card-body">
            <h6 className="card-title text-center">{card.title}</h6>
            {id ? card.id : ""}
            <h6 className="text-center">Comodidades:</h6>
            <span>
              <i className="fas fa-wifi"></i> Internet Fast Free.
            </span>
            <br />
            <span>
              <i className="fas fa-tshirt"></i> Servicio de lavanderia.
            </span>
            <br />
            <span>
              <i className="fas fa-bed"></i> Cama Amplia.
            </span>
            <br />
            <span>
              <i className="fas fa-play-circle"></i> Tv plana de 32" full hd.
            </span>
            <br />
            <span>
              <i className="fas fa-broom"></i> Limpieza diaria.
            </span>
            <div className="text-center">
              {card.In}
              <br />
              {card.Out}
              <div className="d-flex justify-content-center m-2">
                <button
                  type="button"
                  class="btnReserva"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <span class="transition"></span>
                  <span class="gradient"></span>
                  <span class="label">Ver Más</span>
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