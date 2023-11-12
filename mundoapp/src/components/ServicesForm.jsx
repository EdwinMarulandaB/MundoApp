import { Formik } from "formik";

import {createService} from '../api/service.api'

export default function ServicesForm() {
  
  return (
    <Formik
      initialValues={{
        nombre: "",
        apellido: "",
        informacion: "",
        url: "",
      }}
      onSubmit={(values,actions) => {
        createService(values)
        values.nombre="",
        values.apellido= ""
        values.informacion = ""
        values.url= ""
        actions.resetForm();
      }}
    >
      {({handleSubmit, values, handleChange}) => (
        <div className="container_create_service">
          <div className="son">
            <h4>Crear servicio</h4>
            <form onSubmit={handleSubmit} className="formservi">
              <label>Nombre</label>
              <input
                type="text"
                className="field"
                name="nombre"
                value={values.nombre}
                onChange={handleChange}
              ></input>

              <label>Apellido</label>
              <input
                type="text"
                className="field"
                name="apellido"
                value={values.apellido}
                onChange={handleChange}
              ></input>

              <label>Informacion</label>
              <input
                type="text"
                className="field"
                name="informacion"
                value={values.informacion}
                onChange={handleChange}
              ></input>

              <label>Url Imagen</label>
              <input
                type="text"
                className="field"
                name="url"
                value={values.url}
                onChange={handleChange}
              ></input>

              <button type="submit" className="btnser boton-verde">Crear</button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
}
