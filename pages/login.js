import React, { useState } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import { loginFetch } from "../helpers/loginHelper";

const Login = () => {
  const [userName, setUserName] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          id="name"
          name="name"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
        />
        <button
          onClick={e => {
            e.preventDefault();
            loginFetch({ username: userName });
          }}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
