import { Link } from "react-router-dom";

const Servicios = () => {
  return (
    <aside>
        <Link to="/Home" className="titulo">
          <h1>Home</h1>
        </Link>
        <Link to="/Servicios" className="boton">
          Servicios
        </Link>
        <Link to="/" className="boton">
          Contacto
        </Link>
        <Link to="/" className="boton">
          Acerca de
        </Link>
        <Link to="/" className="boton">
          Cerrar Sesión
        </Link>
      </aside>
  )
}

export default Servicios