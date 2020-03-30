import React, { useState } from "react";
import { loginUser } from "../helpers/helperLogin";

const LoginPanel = () => {
  const [loginUserName, setLoginUserName] = useState("Michael");
  const [loginPassword, setLoginPassword] = useState("test");

  return (
    <form>
      <h1>Login</h1>
      <input
        type="text"
        id="login-name"
        name="login-name"
        value={loginUserName}
        onChange={e => {
          setLoginUserName(e.target.value);
        }}
      />
      <input
        type="text"
        id="login-password"
        name="login-password"
        value={loginPassword}
        onChange={e => {
          setLoginPassword(e.target.value);
        }}
      />
      <button
        onClick={e => {
          e.preventDefault();
          loginUser({
            username: loginUserName,
            password: loginPassword
          });
        }}
      >
        LOGIN
      </button>
    </form>
  );
};

export default LoginPanel;
