import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

//Wrapper for routing problems
//Add if you want some extra css or style
//children are other components
const wrapper = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default wrapper;
