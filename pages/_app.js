import React from "react";
import App from "next/app";
import Login from "./login";
import { fetchUserData } from "../helpers/helperLogin";
import "./scss/global.scss";

export default class MyApp extends App {
  constructor() {
    super();
    this.state = { userData: { exists: false } };
  }

  async componentDidMount() {
    const userData = { exists: true };
    this.setState({ userData });
  }

  render() {
    const { userData } = this.state;
    const { Component, pageProps } = this.props;
    return userData.exists ? <Component {...pageProps} /> : <Login />;
  }
}
