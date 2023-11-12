import RegisterWorkerForm from "../../components/RegisterWorkerform.jsx";


export default function Register() {
  return (
    <section className="orden">
      <div className="izquierda orden">
        <div className="iz">
          <table className="table">
            <thead>
              <tr>
                <th className="izq">
                  <img className="logo" src="./images/logo.png" alt="" />
                  <h3 className="textbien">Bienvenido de nuevo</h3>
                  <h6 className="textsig" style={{marginBottom:"200px"}}>
                    ¡Completa tu perfil para aprovechar al máximo nuestros
                    servicios!
                  </h6>
                 
                </th>

                <td className="formulario">
                  <section className="containerRegister">
                    <header>Registro de Trabajador</header>
                    <RegisterWorkerForm/>
                  </section>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <div className="derechaworker"></div>
    </section>
  );
}
