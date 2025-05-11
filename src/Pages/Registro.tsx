import "./Registro.css";
import {Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { alertaError, alertaRedireccion } from "../Helpers/funciones";
import "./Registro.css";
let apiUsuarios = "http://localhost:3000/usuarios";

const Registro = () => {
  const [getUsuario, setUsuario] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getName, setName] = useState("");
  const [getHoraRegistro, setHoraRegistro] = useState(null);
  const [usuarios, setUsuarios] = useState([]);
  let navigate = useNavigate();

  function getUsuarios() {
    fetch(apiUsuarios)
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getUsuarios();
  }, []);

  function buscarUsuario() {
    let usuarioEncontrado = usuarios.find(
      (usuario) => getUsuario == usuario.usuario
    );
    return usuarioEncontrado;
  }

  function registrarUsuario() {
    if (!buscarUsuario()) {
      let nuevoUsuario = {
        nombre: getName,
        usuario: getUsuario,
        contrasena: getPassword,
      };
      fetch(apiUsuarios, {
        method: "POST",
        body: JSON.stringify(nuevoUsuario),
      });
      alertaRedireccion(
        navigate,
        "El usuario registrado correctamente",
        "En breves segundos será redireccionado al login",
        "success",
        "/"
      );
      let horaInicio = new Date();
      console.log(horaInicio);
      // setHoraLogin(horaInicio)
      // console.log(getHoraLogin);
    } else {
      alertaError("Error", "Usuario ya existe en la base de datos", "error");
    }
  }


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
