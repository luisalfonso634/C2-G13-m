import { useState, useEffect } from 'react';
import axios from "axios";

const Home = () => {

  const [ hotel, setHotel ] = useState([]);

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
      'x-rapidapi-key': 'd5ce014fd6mshe4d9c327790b437p1f2662jsn5ed0525626dd'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  useEffect(() => {
    axios.request(options).then(function (response) {
      console.log(response.data);
      setHotel(response.data.result);
    }).catch(function (error) {
      console.error(error);
    });
  },[]);

    return(

      <div className="container">
          <h1>home</h1>

          {hotel.map((element) => {
                return(
                
                  <div className="container">
                 <div className="row">
                   <div className="col-md-4"> 
                   <div class="card">
                  <img src={element.max_1440_photo_url} class="card-img-top" alt="..."/>
                  <div class="card-body">
                  <h5 class="card-title">{element.hotel_name}</h5>
                 <h6>{element.accommodation_type_name} en la Ciudad de {element.city_name_en}</h6>
                 <p class="card-text">{element.all_inclusive_amount}</p>
                 </div>
                 <ul class="list-group list-group-flush text-center">
                 <li class="list-group-item"><i className="fas fa-check"></i> Check-in {element.checkin.from} - Check-out {element.checkout.from}</li>
                 <li class="list-group-item">A second item</li>
                 <li class="list-group-item"><i className="fas fa-map-marker-alt"></i> Dirección {element.address}</li>
                 </ul>
                 <div class="card-body d-flex justify-content-around">
                 <button className="btn btn-info">Ver Más</button>
                 <button className="btn btn-success">Reservar</button>
                 </div>
 </div>             
                   </div>
                   </div>
                   </div>
                )})}
      </div>
    ) }

export default Home;


// <i className="far fa-star"></i>
// <i class="fas fa-star"></i>