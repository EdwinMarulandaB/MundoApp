import ServicesCard from "../../components/ServicesCard.jsx";
import { getServices } from "../../api/service.api.js";
import { useEffect, useState } from "react";

export default function Services() {
  const [services, setservices] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getServices();
      setservices(response.data);
    })();
  }, []);


  function renderMain() {
    if (services.length == 0) return <h1>No Tasks Yet</h1>;
    return services.map((servi, i) => <ServicesCard service={servi} key={i} />);
  }
  return (
    <>
      <div className="container buscar">
        <form className="d-flex buscar" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" disabled={true}>
            Search
          </button>
        </form>
      </div>

      {renderMain()}
    </>
  );
}
