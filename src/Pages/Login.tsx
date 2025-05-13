import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  alertaError,
  alertaRedireccion,
  generarToken,
} from "../Helpers/funciones";
let apiUsuarios = "http://localhost:3000/usuarios";
interface Usuario {
  usuario: string;
  contrasena: string;
  nombre: string;
  
}
const Login = () => {
  const [usuario, setUsuario] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  //const [horaLogin, setHoraLogin] = useState<Date | null>(null);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const navigate = useNavigate();

  function getUsuarios(): void {
    fetch(apiUsuarios)
      .then((response: Response) => {
        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }
        return response.json();
      })
      .then((data: Usuario[]) => setUsuarios(data))
      .catch((error: Error) => {
        console.error("Error fetching usuarios:", error);
        alertaError("Error", "No se pudieron cargar los usuarios", "error");
      });
  }

  useEffect(() => {
    getUsuarios();
    document.body.classList.add("login-background");
    return () => {
      document.body.classList.remove("login-background");
    };
  }, []);

  function buscarUsuario(): Usuario | undefined {
    return usuarios.find(
      (u: Usuario) => usuario === u.usuario && password === u.contrasena
    );
  }

  function inicioSesion(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const usuarioEncontrado = buscarUsuario();

    if (usuarioEncontrado) {
      const tokenAcceso: string = generarToken();
      localStorage.setItem("token", tokenAcceso);
      localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));

      alertaRedireccion(
        navigate,
        `Bienvenido ${usuarioEncontrado.nombre}`,
        "En breves segundos será redireccionado al Home",
        "success",
        "/home"
      );

      const horaInicio: Date = new Date();
      console.log(horaInicio);
      //setHoraLogin(horaInicio);
    } else {
      alertaError(
        "Error de autenticación",
        "Usuario o contraseña incorrectos",
        "error"
      );
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
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="forgot">
            <p></p>
          </div>
        </div>
        <button
          className="sign"
          style={{ marginBottom: "20px" }}
          onClick={inicioSesion}
        >
          Iniciar Sesión
        </button>
      </form>
      <p className="signup" style={{ marginTop: "20px" }}>
        <Link to="/Sing-up" className="signup-link">
          ¿No tienes una cuenta?
        </Link>
      </p>
    </div>
  );
  
};

export default Login;
