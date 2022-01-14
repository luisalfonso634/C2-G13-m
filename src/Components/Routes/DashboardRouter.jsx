import { Routes, Route } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import Home from '../Pages/Home';
import Contacto from '../Pages/Contacto';
import Login from '../Pages/Login';
import Registro from '../Pages/Registro';
import PublicarTuHotel from '../Pages/PublicarTuHotel';
import Alojamiento from '../Pages/Alojamiento';
import Vuelos from '../Pages/Vuelos';
import AtraccionesTuristicas from '../Pages/AtraccionesTuristicas';

const DashboardRouter = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="contacto" element={<Contacto/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="registro" element={<Registro />}/>
      <Route path="publicatuhotel" element={<PublicarTuHotel />}/>
      <Route path="alojamiento" element={<Alojamiento/>}/>
      <Route path="vuelos" element={<Vuelos />}/>
      <Route path="atracciones_turisticas" element={<AtraccionesTuristicas/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default DashboardRouter;