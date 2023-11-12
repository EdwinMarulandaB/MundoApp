import { Link, Outlet } from "react-router-dom";

import { useNavBar } from "../context/NavContext.jsx";
import Login from "./login.jsx";

export default function Navbar() {
  const { loged } = useNavBar();
  return (
    <>
      <nav
        id="nav"
        className="navbar centradonav navbar-expand-lg bg-body-tertiary"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="logoNav" src="./images/logo.png" alt="" />
          </a>

          {!loged && <Login />}

          {!loged ? (
            <div className=" enlace mb-3">
              <h2 className="colortext1">No Tengo Cuenta</h2>
              <div className="colorenlace">
                <h3>¿Cual es tu perfil?</h3>
                <h5>Nuevo</h5>
              </div>
              <Link to="/registerclient" className="btn btn-secondary" style={{marginRight:"10px"}}>
                Cliente
              </Link>

              <Link to="/registerworker" className="btn btn-secondary">Trabajador</Link>
            </div>
          ) : (
            <div className=" ">
              <h2 className="bienv"> Tu Hogar, Nuestra Prioridad. </h2>
              <h2 className="bienv"> Contrata con Confianza. </h2>
            </div>
          )}
        </div>
      </nav>

      {loged && (
        <nav className="navbar centradonav navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid fondobot">
            <div className=" enlace">
              <a className="btn colorboton "  role="button">
                Categorias
              </a>
            </div>

            <div className=" enlace">
              <a className="btn colorboton"  role="button">
                Mis Servicios
              </a>
            </div>

            <div className=" enlace">
              <a className="btn colorboton"  role="button">
                Notificaciones
              </a>
            </div>
            <div className=" enlace">
              <a className="btn colorboton"  role="button">
                Chat
              </a>
            </div>
            <div className=" enlace">
              <a className="btn colorboton"  role="button">
                Soporte
              </a>
            </div>
            <div className=" enlace">
              <a className="btn colorboton"  role="button">
                Salir
              </a>
            </div>
          </div>
        </nav>
      )}

      <div id="hijo">
        <Outlet />
      </div>
    </>
  );
}
