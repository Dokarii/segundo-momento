import "./Login.css";

const Login = () => {
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
          Sign in
        </button>
      </form>
      <p className="signup" style={{ marginTop: "20px" }}>
        Don't have an account?
        <a rel="noopener noreferrer" href="#" className="signup-link">
          {" "}
          Sign up
        </a>
      </p>
    </div>
  );
};

export default Login;
