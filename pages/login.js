import React, { useState } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import { registerUser } from "../helpers/helperLogin";

const Login = () => {
  const [userName, setUserName] = useState("Michael");
  const [password, setPassword] = useState("test");

  return (
    <div>
      <form>
        <h1>Register</h1>
        <input
          type="text"
          id="name"
          name="name"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <button
          onClick={e => {
            e.preventDefault();
            registerUser({ username: userName, password });
          }}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
