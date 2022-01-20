import Habitacion1 from "./Habitacion1";
import Habitacion2 from "./Habitacion2";
import Habitacion3 from "./Habitacion3";
import Habitacion4 from "./Habitacion4";
import HabitacionFamiliar1 from "./HabitacionFamiliar1";
import HabitacionFamiliar2 from "./HabitacionFamiliar2";
import HabitacionFamiliar3 from "./HabitacionFamiliar3";
import HabitacionFamiliar4 from "./HabitacionFamiliar4";
import HabitacionIndividual1 from "./HabitacionIndividual1";
import HabitacionIndividual2 from "./HabitacionIndividual2";
import HabitacionIndividual3 from "./HabitacionIndividual3";
import HabitacionIndividual4 from "./HabitacionIndividual4";

const Habitaciones = () => {
  return <div>
              <div className="titulos">
                <h2 className="text-center">Habitaciones Matrimoniales</h2>
              </div>
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
              <div className="titulos">
            <h2 className="text-center">Habitaciones Individuales</h2>
              </div>
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
              <div className="titulos">
            <h2 className="text-center">Habitaciones Familiares</h2>
              </div>
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
};

export default Habitaciones;
