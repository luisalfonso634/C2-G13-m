import { Link } from 'react-router-dom';
import Habitaciones from './Habitaciones/Habitaciones';

const Home = () => {

    return(
      
          <div className="container">
            <br/>
            <Habitaciones/>
            <br/>
            <div className="alert alert-success" role="alert">
        Consigue la información que necesitas. Consulta las últimas
        restricciones por la COVID-19 antes de viajar.
        <Link to="/">Más info</Link>
      </div>
          </div>

    ) }

export default Home;