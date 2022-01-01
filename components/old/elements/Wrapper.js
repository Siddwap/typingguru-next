import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Wrapper(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Wrapper;
