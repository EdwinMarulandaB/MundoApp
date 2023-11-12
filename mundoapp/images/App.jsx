import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/register_pages/Register.page";
import Home from './pages/home_pages/Home.page.jsx'

import { NavContextProvider } from "./context/NavContext.Jsx";
function App() {
  return (
    <div id="principal">
      <Routes>
        <Route
          path="/"
          element={
            <NavContextProvider>
              <Navbar />
            </NavContextProvider>
          }
        >
          <Route
            path="/"
            element={<Home/>}
          ></Route>
        </Route>

        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
