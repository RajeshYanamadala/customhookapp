import React, { useEffect } from "react";
import useLogForm from "../../src/useLogForm";
import { useState } from "react";
import "./../App.css";
import image from "./../download.png";

const LoginForm = () => {
  const nameInput = useLogForm("");
  const passwordInput = useLogForm("");
  const [showInfo, setShowInfo] = useState(true);
  const [inputField, setinputField] = useState({
    password: "",
  });

  const handleSubmit = (e) => {
    setinputField(nameInput.value);
    setinputField(passwordInput.value);
    e.preventDefault();
    nameInput.reset();
    passwordInput.reset();

    setShowInfo((prev) => !prev);
  };

  console.log(inputField.names);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Login form</h1>

      <form onSubmit={handleSubmit} className="form-card">
        {!showInfo && (
          <>
            <label>Name:</label>
            <input type="name" {...nameInput} className="input-filed" />
            <label>Password:</label>
            <input type="password" {...passwordInput} className="input-filed" />
          </>
        )}
        <button type="submit" className="submit-btn">
          {showInfo ? "logout" : "login"}
        </button>
      </form>
      <div>
        <img src={image} alt="img" />
      </div>
      {showInfo && (
        <div style={{ textAlign: "center" }}>
          <p>your are seccufully login </p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
