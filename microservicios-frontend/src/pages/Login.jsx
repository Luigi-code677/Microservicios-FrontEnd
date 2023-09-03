import React, { useState, useEffect } from "react";
import Alerta from "../components/Alerta";
import { Link } from "react-router-dom";
import "../styles/Login.css"

const Login = () => {
  const [nombre, getNombre] = useState("");
  const [password, getPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  useEffect(() => {
    if (alerta.message) {
      const timer = setTimeout(() => {
        setAlerta({});
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [alerta]);

  const { message } = alerta;

  return (
    <div className="login-container">
      {message && <Alerta alerta={alerta} />}

      <h2 className="login-title">Iniciar Sesión</h2>

      <div className="input-group">
        <label htmlFor="email" className="input-label">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          placeholder="Introduce tu e-mail"
          className="input-field"
          value={nombre}
          onChange={(e) => getNombre(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="password" className="input-label">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          placeholder="Introduce tu contraseña"
          className="input-field"
          value={password}
          onChange={(e) => getPassword(e.target.value)}
        />
      </div>

      <button className="login-button">Iniciar Sesión</button>

      <div className="social-buttons">
        <button className="social-button facebook">Iniciar Sesión con Facebook</button>
        <button className="social-button google">Iniciar Sesión con Google</button>
      </div>

      <div className="login-options">
        <Link to="/register" className="register-link">
          No tienes una cuenta? <span className="hover-text">Regístrate</span>
        </Link>
        <Link to="/restore-account" className="forgot-password-link">
          Olvidé mi contraseña
        </Link>
      </div>
    </div>
  );
};

export default Login;
