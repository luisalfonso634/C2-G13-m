import { Routes, Route } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import Home from '../Pages/Home';
import Contacto from '../Pages/Contacto';
import Login from '../Pages/Login';

const DashboardRouter = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="contacto" element={<Contacto/>}/>
      <Route path="login" element={<Login/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default DashboardRouter;