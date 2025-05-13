import "./Registro.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  alertaError,
  alertaRedireccion
} from "../Helpers/funciones";

let apiUsuarios = "http://localhost:3000/usuarios";

interface Usuario {
  usuario: string;
  contrasena: string;
  nombre: string;
  correo: string;
}

const Registro = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [usuario, setUsuario] = useState<string>("");  
  const [contrasena, setcontrasena] = useState<string>("");
  const [nombre, setNombre] = useState<string>("");
  const [correo, setCorreo] = useState<string>("");
  //const [horaLogin, setHoraLogin] = useState<Date | null>(null);
  const navigate = useNavigate();

  function getUsuarios(): void {
    fetch(apiUsuarios)
      .then((response: Response) => response.json())
      .then((data: Usuario[]) => setUsuarios(data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getUsuarios();
  }, []);

  function buscarUsuario(): Usuario | undefined {
    return usuarios.find(
      (u: Usuario) => u.usuario === usuario && u.contrasena === contrasena
    );
  }

  function registrarUsuario(event: React.FormEvent): void {
    event.preventDefault();

    const usuarioExistente = buscarUsuario();
  
    if (!usuarioExistente) {
      const nuevoUsuario: Usuario = {
        nombre: nombre,
        usuario: usuario,
        contrasena: contrasena,
        correo: correo
      };
  
      fetch(apiUsuarios, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevoUsuario)
      });
  
      alertaRedireccion(
        navigate,
        "Usuario registrado correctamente",
        "En breves segundos será redireccionado al login",
        "success",
        "/"
      );
  
      const horaInicio = new Date();
      console.log(horaInicio);
      // setHoraLogin(horaInicio)
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
      <form className="form" onSubmit={registrarUsuario}>
        <div className="input-group">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Ingresa tu usuario"
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
            value={contrasena}
            onChange={(e) => setcontrasena(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ingresa tu correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <button type="submit" className="sign" style={{ marginBottom: "10px" }}>
          Registrar
        </button>
      </form>
      <p className="signup">
        <Link to="/" className="signup-link">¿Ya tienes una cuenta?</Link>
      </p>
    </div>
  );
};

export default Registro;
