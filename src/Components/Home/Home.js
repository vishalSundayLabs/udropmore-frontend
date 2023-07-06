import React from "react";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="circle-left"></div>
      <div className="circle-right"></div>
      <Content />
      <Footer />
    </>
  );
};
