import React from 'react'
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="container text-center p-5">
        <h1>error 404</h1>
        <br/>
        <Link to="/" className="text-decoration-none text-black">Volver al Inicio</Link>
    </div>
  )
}

export default Error404;