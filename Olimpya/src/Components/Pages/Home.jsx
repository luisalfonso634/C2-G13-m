var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://booking-com.p.rapidapi.com/v1/hotels/search',
  params: {
    locale: 'en-gb',
    dest_type: 'city',
    dest_id: '-553173',
    adults_number: '2',
    units: 'metric',
    checkin_date: '2022-07-01',
    checkout_date: '2022-07-02',
    filter_by_currency: 'AED',
    order_by: 'popularity',
    room_number: '1',
    categories_filter_ids: 'class::2,class::4,free_cancellation::1',
    include_adjacency: 'true',
    page_number: '0',
    children_ages: '5,0',
    children_number: '2'
  },
  headers: {
    'x-rapidapi-host': 'booking-com.p.rapidapi.com',
    'x-rapidapi-key': 'f25d0684f1mshd20120b1aedf2e3p1f80d8jsnb4397fe7d8b0'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
const Home = () => {

    return(
      <div className="container">
      {/* {(hotel && hotel.home) &&
         <div>
           <h2>{hotel.home[0].title}</h2>
         <br />
         <p>{hotel.home[0].body}</p>
         </div>
     }     */}
 </div>
    )
    }


export default Home;