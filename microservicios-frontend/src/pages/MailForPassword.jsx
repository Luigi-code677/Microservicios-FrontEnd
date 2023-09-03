import React, { useState, useEffect } from "react";
import Alerta from "../components/Alerta";
import { Link } from "react-router-dom";
import "../styles/Login.css";

const MailForPassword = () => {
  const [email, getEmail] = useState("");
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

      <h2 className="login-title">Recuperar cuenta</h2>


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


      <button className="login-button">Enviar codigo</button>

      <div className="login-options">
        <Link to="/" className="forgot-password-link">
            Volver a inicio
        </Link>
      </div>
    </div>
  );
};

export default MailForPassword;
