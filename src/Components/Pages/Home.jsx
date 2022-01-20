import Habitacion1 from "./Habitaciones/Habitacion1";
import Habitacion2 from "./Habitaciones/Habitacion2";
import Habitacion3 from "./Habitaciones/Habitacion3";
import Habitacion4 from "./Habitaciones/Habitacion4";
import HabitacionFamiliar1 from "./Habitaciones/HabitacionFamiliar1";
import HabitacionFamiliar2 from "./Habitaciones/HabitacionFamiliar2";
import HabitacionFamiliar3 from "./Habitaciones/HabitacionFamiliar3";
import HabitacionFamiliar4 from "./Habitaciones/HabitacionFamiliar4";
import HabitacionIndividual1 from "./Habitaciones/HabitacionIndividual1";
import HabitacionIndividual2 from "./Habitaciones/HabitacionIndividual2";
import HabitacionIndividual3 from "./Habitaciones/HabitacionIndividual3";
import HabitacionIndividual4 from "./Habitaciones/HabitacionIndividual4";

const Home = () => {

    return(
      
          <div className="container">
            <br/>
            <div className="row">
              <div className="col">
            <Habitacion1/>
              </div>
              <div className="col">
            <Habitacion2/>
              </div>
              <div className="col">
            <Habitacion3/>
              </div>
              <div className="col">
            <Habitacion4/>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col">
              <HabitacionIndividual1/>
              </div>
              <div className="col">
                <HabitacionIndividual2/>
              </div>
              <div className="col">
              <HabitacionIndividual3/>
              </div>
              <div className="col">
                <HabitacionIndividual4/>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col">
            <HabitacionFamiliar1/>
              </div>
              <div className="col">
            <HabitacionFamiliar2/>
              </div>
              <div className="col">
              <HabitacionFamiliar3/>
              </div>
              <div className="col">
            <HabitacionFamiliar4/>
              </div>
            </div>
            <br/>
          </div>

    ) }

export default Home;