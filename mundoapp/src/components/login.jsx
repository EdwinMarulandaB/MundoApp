/* eslint-disable react-hooks/rules-of-hooks */

import { useNavBar } from "../context/NavContext.jsx";
import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function login() {
  const navigate = useNavigate();
  const { logerar } = useNavBar();
  const [exitoFormulario, setexitoFormulario] = useState("");
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(valores) => {
          let err = {};
          var regex_password = /^.{8,15}$/;
          var regex_email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

          // Validacion Email
          if (!valores.email) {
            err.email = "Por favor ingresa un email";
          } else if (!regex_email.test(valores.email)) {
            err.email = "Email invalido ";
          }

          // Validacion password
          if (!valores.password) {
            err.password = "Por favor ingrese una contraseña";
          } else if (!regex_password.test(valores.password)) {
            err.password = "La contraseña tiene que ser de 8 a 15 digitos";
          }

          return err;
        }}
        onSubmit={ async (valores) => {
          const response = await logerar(valores)
          setexitoFormulario(response)
          if (response == "c") {
            navigate("/services")
          }else if (response == "w"){
            navigate("/createservices")
          }
          setTimeout(() => setexitoFormulario(""), 4000);
        }}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <div id="email">
             
              <input
                type="text"
                placeholder="Usuario"
                className="form-control"
                name="email"
                aria-describedby="emailHelp"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="message">
                {touched.email && errors.email && (
                  <div className="error">{errors.email}</div>
                )}
              </div>
            </div>
            <div>
              
              <input
                type="password"
                placeholder="Contraseña"
                className="form-control"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="message">
                {touched.password && errors.password && (
                  <div className="error">{errors.password}</div>
                )}
              </div>
            </div>
            <button type="submit" className="btn btnn">
              Ingresar
            </button>
            <div className="message">
              {exitoFormulario && <p className="error">{exitoFormulario}</p>}
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
