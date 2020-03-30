import React, { useState } from "react";
import { registerUser } from "../helpers/helperLogin";

const RegisterPanel = () => {
  const [registerUserName, setRegisterUserName] = useState("Michael");
  const [registerPassword, setRegisterPassword] = useState("test");

  return (
    <form>
      <h1>Register</h1>
      <input
        type="text"
        id="register-name"
        name="register-name"
        value={registerUserName}
        onChange={e => {
          setRegisterUserName(e.target.value);
        }}
      />
      <input
        type="text"
        id="register-password"
        name="register-password"
        value={registerPassword}
        onChange={e => {
          setRegisterPassword(e.target.value);
        }}
      />
      <button
        onClick={e => {
          e.preventDefault();
          registerUser({
            username: registerUserName,
            password: registerPassword
          });
        }}
      >
        LOGIN
      </button>
    </form>
  );
};

export default RegisterPanel;
