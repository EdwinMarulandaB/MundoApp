import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import RegisterClient from "./pages/register_pages/RegisterCient.page.jsx";
import Home from "./pages/home_pages/Home.page.jsx";
import Services from "./pages/home_pages/Services.page.jsx";
import RegisterWorker from "./pages/register_pages/RegisterWorker.page";
import CreateService from './pages/home_pages/CreateService.page.jsx'
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
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/createservices" element={<CreateService />}></Route>
        </Route>
        
        <Route path="/registerclient" element={<RegisterClient />}></Route>
        <Route path="/registerworker" element={<RegisterWorker />}></Route>
      </Routes>
    </div>
  );
}

export default App;
