import { Routes, Route } from 'react-router-dom';
import DashboardRouter from './DashboardRouter';
import PerfilUsuario from '../Pages/PerfilUsuario';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="perfilusuario" element={<PerfilUsuario />}/>
        <Route path="/*" element={<DashboardRouter />}/>
      </Routes>
    </>
  )
}

export default AppRouter;