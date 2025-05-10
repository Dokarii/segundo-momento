import "./Registro.css";
import {Link } from "react-router-dom";
import { useEffect } from "react";

const Registro = () => {
  useEffect(() => {
    document.body.classList.add("login-background");
    return () => {
      document.body.classList.remove("login-background");
    };
  }, []);
  return (
    <div className="form-container">
      <p className="title">Iniciar sesión</p>
      <form className="form">
        <div className="input-group">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Ingresa tu usuario"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <div className="input-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ingresa tu correo"
          />
          <div className="forgot">
            <p></p>
          </div>
        </div>
        <button className="sign" style={{ marginBottom: "10px" }}>
          Registrar
        </button>
      </form>
      <p className="signup">
        <a rel="noopener noreferrer" href="" className="signup-link">
          {" "}
          <Link to="/">¿Ya tienes una cuenta?</Link>
        </a>
      </p>
    </div>
  );
};

export default Registro;
