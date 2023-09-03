import React, { useState, useEffect } from "react";
import Alerta from "../components/Alerta";
import { Link } from "react-router-dom";
import "../styles/Login.css"


const Register = () => {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setPasswordConfirm] = useState("");
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
    <div className="register-container">
      {message && <Alerta alerta={alerta} />}

      <h2 className="login-title">Registro</h2>

      <div className="input-group">
        <label className="input-label">
          Nombre
        </label>
        <input
          type="text"
          placeholder="Introduce tu nombre"
          className="input-field"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="email" className="input-label">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          placeholder="Introduce tu e-mail"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="password" className="input-label">
          Repetir Contraseña
        </label>
        <input
          type="password"
          id="password"
          placeholder="Confirma tu contraseña"
          className="input-field"
          value={repetirPassword}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </div>

      <button className="login-button">Registrar cuenta</button>

      <div className="login-options">
        <Link to="/" className="forgot-password-link">
            Volver a inicio
        </Link>
      </div>
    </div>
  );

}

export default Register;