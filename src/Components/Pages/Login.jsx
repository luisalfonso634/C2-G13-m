
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { UserContext } from "../../context/UserContext"
//import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import { useMutation } from "@apollo/client"
import { queryLogin } from "./../../config/queries"

export default function Login() {
  const [login, result] = useMutation(queryLogin)
  const { setIsLogged, setUserId } = useContext(UserContext)
  const navigate = useNavigate()
  const comingTurn = localStorage.getItem("comingTurn") ? true : false

  useEffect(() => {
    if (!result.data) return
    if (result.data.user === null) return
    const newLocation = comingTurn ? "/Turn" : "/perfilusuario"
    const { user, token, success, errors, refreshToken } = result.data.tokenAuth
    console.log({ user, token, success, errors, refreshToken })
    localStorage.setItem("token", JSON.stringify(token))
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: user.firstName,
        surname: user.lastName,
        type: user.isClient
          ? "client"
          : user.isSysadmin
            ? "admin"
            : "",
      })
    )
    localStorage.setItem("userId", JSON.stringify(user.pk))
    setIsLogged(true)
    setUserId(user.pk)
    navigate(newLocation)
  }, [result.data, comingTurn, navigate, setIsLogged, setUserId])
  return (
    <>
      <section className="Login-Page">
        <Formik
          initialValues={{
            email: "",
            password: "",
            all: "",
          }}
          onSubmit={(values, { setFieldError }) => {
            login({
              variables: { email: values.email, password: values.password },
            })
          }}
          validate={(values) => {
            const errors = {}
            if (!values.email) {
              errors.email = "email is required"
            }
            if (!values.password) {
              errors.password = "password is required"
            } else if (values.password.length < 3) {
              errors.password =
                "password length is better with more 3 characters"
            }
            return errors
          }}
        >
          {({ errors, isSubmitting }) => (
            <div>
            <div className="container text-center">
              <h3 className="mt-5">Iniciar Sesión</h3>
              <Form className="container">
                <Field name="email" type="email" className='form-control m-3 inputForm mx-auto' placeholder=" Email"
                       style={
                        errors.email ? { outlineColor: "red" } : { outlineColor: "" }
                  }/>
                <Field name="password" type="password" className='form-control m-3 inputForm mx-auto' placeholder=" Contraseña"/>
                  <button type="submit" className="learn-more boton2">
                    <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Iniciar Sesión</span>
                  </button>
              </Form>
                <ErrorMessage name="all" component="small" />
                <ErrorMessage name="email" component="small" />
                <ErrorMessage name="password" component="small" />
            </div>
            <br/>
            <br/>
            <div className="d-flex align-items-center justify-content-center">
              <Link to="/registro" className="text-decoration-none">
                <button className="boton">¿No tienes cuenta? Registrate</button>
              </Link> 
            </div>
            </div>
          )}
        </Formik>
      </section>
    </>
  )
}
/*
const Login = () => {
  return (
    <>
    <div className="container text-center">
      <h3 className="mt-5">Iniciar Sesión</h3>
      <form className="container">
        <input type="email" className='form-control m-3 inputForm mx-auto' placeholder=" Email"/>
        <input type="password" className='form-control m-3 inputForm mx-auto' placeholder=" Contraseña"/>
      </form>
      <Link to="/perfilusuario">
        <button className="learn-more boton2">
          <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
        </span>
        <span className="button-text">Iniciar Sesión</span>
     </button>
      </Link>
    </div>
    <br/>
    <br/>
      <div className="d-flex align-items-center justify-content-center">
     <Link to="/registro" className="text-decoration-none">
     <button className="boton">¿No tienes cuenta? Registrate</button>
     </Link>
      </div>
          </>
  )
}

export default Login;*/