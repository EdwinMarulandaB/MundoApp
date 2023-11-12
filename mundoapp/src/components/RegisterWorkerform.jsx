import { Formik } from "formik";
import { createWorkerRequest } from "../api/worker.api.js";
import { useNavigate } from "react-router-dom";
export default function RegisterWorkerForm() {
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          cedula:"",
          email: "",
          password: "",
          contacto: "",
          fecha_nacimiento: "",
        }}
        validate={(valores) => {
          let err = {};
          var regex_password = /^.{8,15}$/;
          var regex_email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
          var regex_contacto = /^(?!-)\d{10}$/;
          var regex_cedula = /^(?!-)\d{10}$/;

          // Validacion Nombre
          if (!valores.nombre) {
            err.nombre = "Por favor ingresa un nombre";
          }

          // Validacion apellido
          if (!valores.apellido) {
            err.apellido = "Por favor ingresa un apellido";
          }

            // Validacion cedula
            if (!valores.cedula) {
              err.cedula = "Por favor ingresa una cedula";
            }else if (!regex_cedula.test(valores.cedula)) {
              err.cedula = "Cedula invalido";
            }

          // Validacion Email
          if (!valores.email) {
            err.email = "Por favor ingresa un email";
          } else if (!regex_email.test(valores.email)) {
            err.email = "Email invalido";
          }

          // Validacion password
          if (!valores.password) {
            err.password = "Por favor ingrese una contraseña";
          } else if (!regex_password.test(valores.password)) {
            err.password = "La contraseña tiene que ser de 8 a 15 digitos";
          }

          // Validacion Contacto
          if (!valores.contacto) {
            err.contacto = "Por favor ingrese un contacto";
          } else if (!regex_contacto.test(valores.contacto)) {
            err.contacto = "Contacto invalido";
          }

          // Validacion fecha_nacimiento
          if (!valores.fecha_nacimiento) {
            err.fecha_nacimiento = "Por favor ingrese una fecha";
          }

          return err;
        }}
        onSubmit={async (valores) => {
          await createWorkerRequest(valores);
          navigate("/");
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
          <form onSubmit={handleSubmit} className="form">
            <div className="input-box recortador">
              <label>Nombres</label>
              <input
                type="text"
                placeholder="Ingrese Nombre"
                name="nombre"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="message">
                {touched.nombre && errors.nombre && (
                  <div className="error">{errors.nombre}</div>
                )}
              </div>
              <label>Apellidos</label>
              <input
                type="text"
                placeholder="Ingrese Appellido"
                name="apellido"
                value={values.apellido}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="message">
                {touched.apellido && errors.apellido && (
                  <div className="error">{errors.apellido}</div>
                )}
              </div>
            
              <label>Cedula</label>
              <input
                type="number"
                placeholder="Ingrese Cedula"
                name="cedula"
                value={values.cedula}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="message">
                {touched.cedula && errors.cedula && (
                  <div className="error">{errors.cedula}</div>
                )}
              </div>
            

            
              <label>Email</label>
              <input
                type="text"
                placeholder="Ingrese email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <div className="message">
                {touched.email && errors.email && (
                  <div className="error">{errors.email}</div>
                )}
              </div>
              

            
              <label>Contraseña</label>
              <input
                type="password"
                placeholder="Ingrese Contraseña"
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
              
              <div className="column">
                <div className="input-box recortador" >
                  <label>Contacto</label>
                  <input
                    type="number"
                    placeholder="Ingrese contacto"
                    name="contacto"
                    value={values.contacto}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="message">
                    {touched.contacto && errors.contacto && (
                      <div className="error">{errors.contacto}</div>
                    )}
                  </div>
                </div>
                <div className="input-box recortador">
                  <label>Fecha De Naciemiento</label>
                  <input
                    type="date"
                    placeholder="Enter birth date"
                    name="fecha_nacimiento"
                    value={values.fecha_nacimiento}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="message">
                    {touched.fecha_nacimiento && errors.fecha_nacimiento && (
                      <div className="error">{errors.fecha_nacimiento}</div>
                    )}
                  </div>
                </div>
              </div>

            <button type="submit" className="btn btn-secondary registerbutton">
              Registro
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}
