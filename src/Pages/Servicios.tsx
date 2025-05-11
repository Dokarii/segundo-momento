import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Home.css";

const Servicios = () => {
    useEffect(() => {
        document.body.classList.add("services-background");
        return () => {
          document.body.classList.remove("services-background");
        };
      }, []);

  return (
    <aside>
        <Link to="/Home" className="titulo">
          <h1>Home</h1>
        </Link>
        <Link to="/Services" className="boton">
          Servicios
        </Link>
        <Link to="/Contact" className="boton">
          Contacto
        </Link>
        <Link to="/About" className="boton">
          Acerca de
        </Link>
        <Link to="/" className="boton">
          Cerrar Sesión
        </Link>
      </aside>
  )
}

export default Servicios