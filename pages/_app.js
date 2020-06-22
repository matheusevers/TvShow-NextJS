import React from "react";
import App from "next/app";
import Header from "../components/Header";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Header />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
