export default function Home() {
  return (
    <>
      <div className="homeclass">
        <table className=" textcentro tableImages">
          <tbody style={{ marginTop: "100px" }}>
            <tr>
              <th>
                <img
                  className="img"
                  src="./images/Mesa de trabajo 19.png"
                  alt=""
                />
              </th>
              <td scope="row" className="" colSpan="2">
                <h1 className="bienv"> ¡Bienvenidos! </h1>
                <br />
                <h2 className="bienvv"> Tu Hogar, Nuestra Prioridad. </h2>
                <h2 className="bienvvv"> Contrata con Confianza. </h2>
              </td>
              <td>
                <img
                  className="img"
                  src="../images/Mesa de trabajo 21.png"
                  alt=""
                />
              </td>
            </tr>

            <tr>
              <th>
                <img
                  className="img"
                  src="../images/Mesa de trabajo 11.png"
                  alt=""
                />
              </th>
              <td>
                <img
                  className="img"
                  src="../images/Mesa de trabajo 13.png"
                  alt=""
                />
              </td>
              <td>
                <img
                  className="img"
                  src="../images/Mesa de trabajo 15.png"
                  alt=""
                />
              </td>
              <td>
                <img
                  className="img"
                  src="../images/Mesa de trabajo 17.png"
                  alt=""
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div
          style={{
            backgroundColor: "#606060",
            height: "10px",
            marginTop: "0%",
          }}
        ></div>
      </div>
    </>
  );
}
