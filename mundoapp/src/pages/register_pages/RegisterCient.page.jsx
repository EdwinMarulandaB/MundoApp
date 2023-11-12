import RegisterClientForm from "../../components/RegisterClientform.jsx";


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
                  <h6 className="textsig">
                    ¡Completa tu perfil para aprovechar al máximo nuestros
                    servicios!
                  </h6>
                  <div className="botones">
                    <section className="buttons">
                      <h6 className="textpeq">INICIAR CON</h6>
                      <a className="fa fa-facebook"></a>
                      <a className="fa fa-twitter"></a>
                      <a className="fa fa-google-plus"></a>
                    </section>

                    <section className="buttons">
                      <a className="fa fa-youtube"></a>
                      <a className="fa fa-pinterest"></a>
                      <a className="fa fa-linkedin"></a>
                    </section>
                  </div>
                </th>

                <td className="formulario">
                  <section className="containerRegister">
                    <header>Registro de Cliente</header>
                    <RegisterClientForm />
                  </section>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <div className="derecha"></div>
    </section>
  );
}
