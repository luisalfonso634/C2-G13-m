import { Outlet } from 'react-router-dom';
import NavbarUsuario from "../Common/NavbarUsuario";
// import SidebarUsuario from "../Common/SidebarUsuario";

const PerfilUsuario = () => {
  return (
    <>
      <NavbarUsuario/>
      <div className="flex">
      {/* <SidebarUsuario/> */}
      <div className="content d-flex justify-content-center align-items-center">
      <Outlet/>
      </div>
      </div>
    </>
  )
}

export default PerfilUsuario;