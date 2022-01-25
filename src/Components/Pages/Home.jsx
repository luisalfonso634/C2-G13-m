import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import ModalReserva from '../Common/ModalReserva';

const Home = () => {

  const [ id, setId ] = useState(false);

  const cardInfo = [

    {id:"25253", 
    image: "https://i.ibb.co/pJF6Z5v/habitacion-Matrimonial.jpg", 
    title: "Habitacion Matrimonial Classic", 
    text: "lorem", 
    in:"Checkin 09Hs",
     out:"Checkout 20Hs", 
     precio: "Precio por noche $6.000"},
    {id:"28795", 
    image: "https://i.ibb.co/NxXPBqf/premium-Bed.jpg", 
    title: "Habitacion Matrimonial Premium", 
    text: "lorem", in:"Checkin 10Hs", 
    out:"Checkout 21Hs", 
    precio: "Precio por noche $4.500"},
    {id:"45755", 
    image: "https://i.ibb.co/n86YxWg/habitacion-Matrimonial2.jpg", 
    title: "Habitacion Matrimonial Love", 
    text: "lorem", in:"Checkin 08Hs", 
    out:"Checkout 19Hs", 
    precio: "Precio por noche $3.500"},
    {id:"43872", 
    image: "https://i.ibb.co/BVc5yyT/habitacion-Matrimonial3.jpg", 
    title: "Habitacion Matrimonial Vintage", 
    text: "lorem", in:"Checkin 09Hs", 
    out:"Checkout 20Hs", 
    precio: "Precio por noche $2.500"},
    {id:"13456", 
    image: "https://i.ibb.co/Mp0prpd/hab-Individual.jpg", 
    title: "Habitacion Individual Single", 
    text: "lorem", in:"Checkin 07Hs", 
    out:"Checkout 18Hs", 
    precio: "Precio por noche $2.000"},
    {id:"65946", 
    image: "https://i.ibb.co/8NXTWS1/hab-Individual2.jpg", 
    title: "Habitacion Individual Classic", 
    text: "lorem", in:"Checkin 11Hs", 
    out:"Checkout 21Hs", 
    precio: "Precio por noche $3.500"},
    {id:"47319", 
    image: "https://i.ibb.co/M9rHLMQ/hab-Individual3.jpg", 
    title: "Habitacion Individual Red & White", 
    text: "lorem", in:"Checkin 08Hs", 
    out:"Checkout 17Hs", 
    precio: "Precio por noche $5.000"},
    {id:"93854", 
    image: "https://i.ibb.co/3TX3QLt/hab-Individual4.jpg", 
    title: "Habitacion Individual Stack", 
    text: "lorem", in:"Checkin 06Hs", 
    out:"Checkout 19Hs", 
    precio: "Precio por noche $8.000"},
    {id:"10279", 
    image: "https://i.ibb.co/SnqS3wZ/familiar1.jpg", 
    title: "Habitacion Familiar Premium", 
    text: "lorem", in:"Checkin 09Hs", 
    out:"Checkout 20Hs", 
    precio: "Precio por noche $8.500"},
    {id:"63987",
     image: "https://i.ibb.co/2Ygbv5G/familiar2.jpg", 
     title: "Habitacion Familiar Confort", 
     text: "lorem", in:"Checkin 10Hs", 
     out:"Checkout 21Hs", 
     precio: "Precio por noche $9.000"},
    {id:"68742", 
    image: "https://i.ibb.co/KqLtjwf/familiar3.jpg", 
    title: "Habitacion Familiar Retro Pro", 
    text: "lorem", in:"Checkin 10Hs", 
    out:"Checkout 17Hs",
    precio: "Precio por noche $8.500"},
    {id:"59874", 
    image: "https://i.ibb.co/P4R3tnm/familiar4.jpg", 
    title: "Habitacion Familiar Pro Mint",
    text: "lorem", 
    in:"Checkin 09Hs", 
    out:"Checkout 20Hs", 
    precio: "Precio por noche $4.000"}
  ]

  const renderCard = (card, index) =>{
    return(
      <div className="col">
  <Card style={{ width: '14rem' }} key={index} >
  <Card.Img variant="top p-2" src={card.image} style={{ width: '250px', height: '150px'}} />
  <Card.Body>
    <Card.Text className="text-center">{card.title}</Card.Text>
        { id ? card.id : ""}
    <Card.Text>
     <h6 className="text-center">Comodidades:</h6>
    <span><i className="fas fa-wifi"></i> Internet Fast Free.</span>
    <br/>
    <span><i className="fas fa-tshirt"></i> Servicio de lavanderia.</span>
    <br/>
    <span><i className="fas fa-bed"></i> Cama Amplia.</span>
      <br/>
      <span><i className="fas fa-play-circle"></i> Tv plana de 32" full hd.</span>
      <br/>
      <span><i className="fas fa-broom"></i> Limpieza diaria.</span>
      <div className="text-center">
      {card.in} 
      <br/>
      {card.out}
      </div>
    </Card.Text>
    <div className="d-flex justify-content-center">
      <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Ver Más
</button>
    </div>
  </Card.Body>
</Card>
<br/>
      </div>
    )
  }

return(
  <>      
      <ModalReserva/>
            <br/>
          <div className="container">
            <div className="row">
          {cardInfo.map(renderCard)}
            </div>
            <br/>
            <div className="alert alert-success" role="alert">
        Consigue la información que necesitas. Consulta las últimas
        restricciones por la COVID-19 antes de viajar.
        <Link to="/"> Más info</Link>
      </div>
          </div>
          </>
    ) }

export default Home;