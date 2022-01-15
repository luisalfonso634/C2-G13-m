import { useState, useEffect } from 'react';
import axios from "axios";

const CardHoteles = () => {

  const [ hotel, setHotel ] = useState([]);

  const [ favorito, setFavorito ] = useState(false);

  var options = {
    method: 'GET',
    url: 'https://booking-com.p.rapidapi.com/v1/hotels/search',
    params: {
      room_number: '1',
      order_by: 'popularity',
      filter_by_currency: 'AED',
      checkout_date: '2022-07-02',
      checkin_date: '2022-07-01',
      units: 'metric',
      adults_number: '2',
      dest_id: '-553173',
      dest_type: 'city',
      locale: 'en-gb',
      children_number: '2',
      children_ages: '5,0',
      page_number: '0',
      include_adjacency: 'true',
      categories_filter_ids: 'class::2,class::4,free_cancellation::1'
    },
    headers: {
      'x-rapidapi-host': 'booking-com.p.rapidapi.com',
      'x-rapidapi-key': '742c157b1amsh0ce7db177aa537ep124a46jsn35510a87af85'
    }
  };
  
  useEffect(() => {
    axios.request(options).then(function (response) {
      console.log(response.data);
      setHotel(response.data.result);
    }).catch(function (error) {
      console.error(error);
    });
  },[]);

    return(

      <div className="container text-center ">
          {hotel.map((element) => {
            return(
              <>
                <div className="row" key={element.id}>
                  <div className="col-4"> 
                  <div class="card">
                 <img src={element.max_1440_photo_url} class="card-img" alt="..."/>
                 <div class="card-body">
                   <div className="d-flex align-items-center justify-content-center">
                 <h5 class="card-title">{element.hotel_name}</h5>
                 <button class="btn">
                   { !favorito ? <i className="far fa-star"></i> : <i className="fas fa-star"></i> }
                   </button>
                   </div>
                <h6>{element.accommodation_type_name} en la Ciudad de {element.city_name_en}</h6>
                </div>
                <p>{element.unit_configuration_label}</p>
                <p>{}</p>
                <div className="d-flex justify-content-center">
                <i className="fas fa-hand-holding-usd me-2"></i> <p>{element.price_breakdown.currency} {element.price_breakdown.gross_price}</p>              
                </div>
                <ul class="list-group list-group-flush text-center">
                <li class="list-group-item">
                <i className="fas fa-check"></i> Check-in {element.checkin.from} - {element.checkin.until}
                </li>
                <li class="list-group-item">
                <i className="fas fa-reply"></i> Check-out {element.checkout.from} - {element.checkout.until}
                </li>
                <li class="list-group-item"><i className="fas fa-map-marker-alt"></i> Dirección {element.address}</li>
                </ul>
                <div class="card-body d-flex justify-content-around">
                <button className="btn btn-info"><i className="fas fa-plus"></i> Ver Más</button>
                <button className="btn btn-success"><i className="far fa-calendar-check"></i> Reservar</button>
                </div>
               </div>             
               </div>
                  </div>
              <br/>
              </>
                ) })}
      </div>
          ) }

export default CardHoteles;