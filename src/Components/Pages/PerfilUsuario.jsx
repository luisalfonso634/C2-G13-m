import { Outlet } from 'react-router-dom';
import NavbarUsuario from "../Common/NavbarUsuario";

const PerfilUsuario = () => {
  return (
    <>
      <NavbarUsuario/>
      <Outlet/>
    </>
  )
}

export default PerfilUsuario;