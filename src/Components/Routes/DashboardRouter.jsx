import { Routes, Route } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import Home from '../Pages/Home';
import Contacto from '../Pages/Contacto';
import Login from '../Pages/Login';
import Registro from '../Pages/Registro';
import Alojamiento from '../Pages/Alojamiento';
import AtraccionesTuristicas from '../Pages/AtraccionesTuristicas';

const DashboardRouter = () => {
  return (
    <>
    <Navbar/>
    <div className="page-container">
    <div className="wrap">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="contacto" element={<Contacto/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="registro" element={<Registro />}/>
      <Route path="alojamiento" element={<Alojamiento/>}/>
      <Route path="atracciones_turisticas" element={<AtraccionesTuristicas/>}/>
    </Routes>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default DashboardRouter;