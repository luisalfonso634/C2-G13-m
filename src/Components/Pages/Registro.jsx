import { Formik, Form, Field } from "formik";
//import { Helmet } from "react-helmet-async";
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from "react";
import { UserContext } from "./../../context/UserContext";
import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { queryRegisterClient } from "./../../config/queries";

export default function Registro() {
  const comingTurn = localStorage.getItem("comingTurn") ? true : false
  const [registerClient, result] = useMutation(queryRegisterClient)
  const { setIsLogged, setUserId } = useContext(UserContext)
  const navigate = useNavigate()
  const newLocation = comingTurn ? "/Turn" : "/perfilusuario"

  useEffect(() => {
    if (!result.data || result.loading) return
    const { id, firstName, lastName, isClient, isSysadmin } =
      result.data.registerclient.user
    //console.log(result)
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: firstName,
        surname: lastName,
        type: isClient
          ? "client"
          : isSysadmin
            ? "admin"
            : "",
      })
    )
    localStorage.setItem("userId", JSON.stringify(id))
    setUserId(id)
    setIsLogged(true)
    navigate(newLocation)
  }, [navigate, newLocation, result.data, 
    result.loading, setIsLogged, setUserId])
  return (
    <>{/*
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Register in our platform" />
    </Helmet> */}
      <section className="Register">
        <Formik
          initialValues={{
            email: "",
            password: "",
            passwordConfirmation: "",
            name: "",
            surname: "",
            phone: "",
          }}
          onSubmit={(values, { setFieldErrors }) => {
            registerClient({
              variables: {
                name: values.name,
                surname: values.surname,
                password1: values.password,
                password2: values.passwordConfirmation,
                email: values.email,
                phone: values.phone,
              },
            })
          }}
          validate={(values) => {
            const errors = {}
            if (!values.email) errors.email = "email is required"
            if (!values.password) errors.password = "password is required"
            else if (values.password < 3)
              errors.password =
                "password is better with more of three characters"
            if (values.passwordConfirmation !== values.password)
              errors.passwordConfirmation = "the passwords does not match"
            if (!values.name) errors.name = "name is required"
            if (!values.surname) errors.surname = "surname is required"
            if (!values.phone) errors.phone = "phone is required"
            return errors
          }}
        >
          {({ errors, isSubmitting }) => (
            <div className="container text-center">
              <h3 className="mt-5">Registrarme</h3>
              <Form>
                <Field name="name" type="text" className='form-control m-3 inputForm mx-auto' placeholder=" Nombre" />
                <Field name="surname" type="text" className='form-control m-3 inputForm mx-auto' placeholder=" Apellido" />
                <Field name="phone" type="text" className='form-control m-3 inputForm mx-auto' placeholder=" Teléfono" />
                <Field name="email" type="email" className='form-control m-3 inputForm mx-auto' placeholder=" Email" />
                <Field name="password" type="password" className='form-control m-3 inputForm mx-auto' placeholder=" Contraseña" />
                <Field name="passwordConfirmation" type="password" className='form-control m-3 inputForm mx-auto' placeholder=" Repeti tu Contraseña" />
                  <button type="submit" className="learn-more boton2">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Registrarme</span>
                  </button>
                  {console.log(errors)}             
              </Form>
              <br/>
              <br/>
              <div className="d-flex justify-content-center">
                <Link to="/login" className="text-decoration-none">
                  <button className="boton">¿Tienes cuenta? Inicia Sesión</button>
                </Link>
              </div>
            </div>
          )}
        </Formik>
      </section>
    </>
  )
}
///////////////////////////////////////////////////
/*const Registro = () => {
  return (
    <>
    <div className="container text-center">
    <h3 className="mt-5">Registrarme</h3>
    <form>
      <input type="text" className='form-control m-3 inputForm mx-auto' placeholder=" Nombre"/>
      <input type="text" className='form-control m-3 inputForm mx-auto' placeholder=" Apellido"/>
      <input type="text" className='form-control m-3 inputForm mx-auto' placeholder=" Teléfono"/>
      <input type="email" className='form-control m-3 inputForm mx-auto' placeholder=" Email"/>
      <input type="password" className='form-control m-3 inputForm mx-auto' placeholder=" Contraseña"/>
      <input type="password" className='form-control m-3 inputForm mx-auto' placeholder=" Repeti tu Contraseña"/>
    </form>
    <Link to="/perfilusuario">
        <button class="learn-more boton2">
        <span class="circle" aria-hidden="true">
        <span class="icon arrow"></span>
        </span>
        <span class="button-text">Registrarme</span>
     </button>
      </Link>
  </div>
    <br/>
    <br/>
    <div className="d-flex justify-content-center">
     <Link to="/login" className="text-decoration-none">
     <button className="boton">¿Tienes cuenta? Inicia Sesión</button>
     </Link>
    </div>
    </>
  )
}

export default Registro;*/