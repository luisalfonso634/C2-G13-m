import { Routes, Route } from 'react-router-dom';
import DashboardRouter from './DashboardRouter';
import Login from '../Components/Pages/Login';

const Router = () => {
  return (
    <>
      <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/*" element={<DashboardRouter />}/>
      </Routes>
    </>
  )
}

export default Router;