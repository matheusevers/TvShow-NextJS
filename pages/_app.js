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

        <style jsx>
          {`
            :global(ul) {
              padding: 0;
              margin: 0;
              list-style-type: none;
            }
          `}
        </style>
      </>
    );
  }
}

export default MyApp;
