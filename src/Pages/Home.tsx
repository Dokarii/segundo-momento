import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1>Home</h1>
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
    </div>
  );
};

export default Home;
