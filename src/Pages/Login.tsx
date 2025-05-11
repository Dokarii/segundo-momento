import "./Login.css";
import { useNavigate,Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  alertaError,
  alertaRedireccion,
  generarToken,
} from "../Helpers/funciones";
import "./Login.css";
let apiUsuarios = "http://localhost:3000/usuarios";

const Login = () => {
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
            placeholder="Ingresa tu nombre de usuario"
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
          <div className="forgot">
            <p></p>
          </div>
        </div>
        <button className="sign" style={{ marginBottom: "20px" }}>
          Iniciar Sesion
        </button>
      </form>
      <p className="signup" style={{ marginTop: "20px" }}>
        <a rel="noopener noreferrer" href="#" className="signup-link">
          {" "}
          <Link to="/Sing-up">¿No tienes una cuenta?</Link>
        </a>
      </p>
    </div>
  );
};

export default Login;
