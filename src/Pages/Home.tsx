import "./Home.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.body.classList.add("home-background");
    return () => {
      document.body.classList.remove("home-background");
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
  );
};

export default Home;
