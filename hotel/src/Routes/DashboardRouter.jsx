import { Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Home from '../Components/Pages/Home';
import Contacto from '../Components/Pages/Contacto';
import Footer from '../Components/Footer';

const DashboardRouter = () => {
  return (
    <>
         <Navbar/>
      <Routes>
      <Route path="contacto" element={<Contacto />}/>
      <Route path="/" element={<Home />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default DashboardRouter;