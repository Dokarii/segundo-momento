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

  const [getUsuario, setUsuario] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getHoraLogin, setHoraLogin] = useState(null);
  interface Usuario {
    usuario: string;
    contrasena: string;
    nombre: string;
  }
  
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
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
      (usuario) =>
        getUsuario == usuario.usuario && getPassword == usuario.contrasena
    );
    return usuarioEncontrado;
  }

  function inicioSesion() {
    if (buscarUsuario()) {
      let tokenAcceso = generarToken();
      localStorage.setItem("token", tokenAcceso);
      localStorage.setItem("usuario", JSON.stringify(buscarUsuario()));
      alertaRedireccion(
        navigate,
        "Bienvenido " + (buscarUsuario()?.nombre || "Usuario"),
        "En breves segundos será redireccionado al Home",
        "success",
        "/home"
      );
      let horaInicio = new Date();
      console.log(horaInicio);
      // setHoraLogin(horaInicio)
      // console.log(getHoraLogin);
    } else {
      alertaError("Error", "Usuario o contraseña incorrectos", "error");
    }
  }

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
