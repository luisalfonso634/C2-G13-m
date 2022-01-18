import { Routes, Route } from 'react-router-dom';
import DashboardRouter from './DashboardRouter';
import PerfilUsuario from '../Pages/PerfilUsuario';
import Inicio from '../Pages/Inicio';
import MisReservas from '../Pages/PagesUsuario/MisReservas';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="perfilusuario" element={<PerfilUsuario />}>
        <Route index element={<Inicio />} />
        <Route path="mis_reservas" element={<MisReservas/>}/>
        </Route>
        <Route path="/*" element={<DashboardRouter />}/>
      </Routes>
    </>
  )
}

export default AppRouter;

{/* <Route path="appHomebanking" element={<AppHomebanking />}>
<Route index element={<Inicio />} />
<Route path="actividad" element={<Actividad />} />
<Route path="saldo" element={<Saldo />} />
<Route path="profile" element={<PerfilUsuario />} />
<Route path="configuracion" element={<Configuracion />} />
<Route path="tarjetas" element={<Tarjeta />} />
<Route path="cuentas" element={<Cuentas />} />
<Route path="movimientos" element={<Movimientos />} />
<Route path="enviar_dinero" element={<EnviarDinero />} />
</Route> */}