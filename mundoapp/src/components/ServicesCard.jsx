/* eslint-disable react/prop-types */


export default function ServicesCard({service}) {

  return (
    <>
    <div id="vertrabaj" className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <img
              className="trabajadorinspec"
              src={service.url}
              alt=""
            />
            
            
            <h3 className="nombre">{service.nombre}</h3>
            <h5 className="apellido">{service.apellido}</h5>
          </div>

          <div className="col colderec">
            <div className="container-a row align-items-start description">
              <div className="col">
                <h3>Calificaciones</h3>
                <img className="imagencalif" src="./images/calif.jpg" alt="" />
              </div>
              <div className="col">
                <h3>Informacion</h3>
                <br />
                <h5>{service.informacion}</h5>
               
              </div>
            </div>

            <div className="botonesR">
              <a className="btn btn-secondary bt1"  role="button">
                Solicitar
              </a>
              <a className="btn btn-secondary"  role="button">
                Reportar
              </a>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <hr></hr>
      </>
  )
}
