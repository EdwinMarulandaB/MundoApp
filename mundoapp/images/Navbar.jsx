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

          {!loged ?(
            <div className=" enlace mb-3">
              <h2 className="colortext1">No Tengo Cuenta</h2>
              <div className="colorenlace">
                <h3>¿Cual es tu perfil?</h3>
                <h5>Nuevo</h5>
              </div>
              <Link to="/register" className="btn btn-secondary">
                Cliente
              </Link>

              <Link className="btn btn-secondary">Trabajador</Link>
            </div>
          ) : <h1>Hola mundo</h1>}
        </div>
      </nav>
      <div id ="hijo">
        <Outlet />
      </div>
    </>
  );
}
