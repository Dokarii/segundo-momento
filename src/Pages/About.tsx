//import React from 'react'
import "./Home.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        document.body.classList.add("about-background");
        return () => {
          document.body.classList.remove("about-background");
        };
      }, []);

  return (
    <div className="container">
    <h1>Acerca de</h1>
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
  )
}

export default About